package com.example.SpringBackend.service;

import com.example.SpringBackend.collection.Auction;
import com.example.SpringBackend.repository.AuctionRepository;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.SortOperation;
import org.springframework.data.mongodb.core.aggregation.UnwindOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuctionServiceImpl implements AuctionService{

    @Autowired
    private AuctionRepository auctionRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public String save(Auction auction) {
        return auctionRepository.save(auction).getAuctionId();
    }

    @Override
    public List<Auction> getAuctionStartWith(String name) {
        return auctionRepository.findByTitleStartsWith(name);
    }

    @Override
    public void delete(String id) {
        auctionRepository.deleteById(id);
    }

    @Override
    public List<Auction> getAuctionByPrice(Integer minPrice, Integer maxPrice) {
        return auctionRepository.findAuctionByPriceBetween(minPrice, maxPrice);
    }

    @Override
    public Page<Auction> search(String title, Integer minPrice, Integer maxPrice, String start, String end, Pageable pageable) {

        Query query = new Query().with(pageable);
        List<Criteria> criteria = new ArrayList<>();

        if(title != null && !title.isEmpty()){
            criteria.add(Criteria.where("title").regex(title, "i"));
        }
        if(minPrice != null && maxPrice != null) {
            criteria.add(Criteria.where("startPrice").gte(minPrice).lte(maxPrice));
        }
        if(start != null && !start.isEmpty()) {
            criteria.add(Criteria.where("start").is(start));
        }
        if(end != null && !end.isEmpty()) {
            criteria.add(Criteria.where("end").is(end));
        }

        if(!criteria.isEmpty()){
            query.addCriteria(new Criteria().andOperator(criteria.toArray(new Criteria[0])));
        }

        Page<Auction> auctions = PageableExecutionUtils.getPage(
                mongoTemplate.find(query, Auction.class),
                        pageable,
                        () -> mongoTemplate.count(query.skip(0).limit(0),Auction.class));

        return auctions;
    }
/*
    @Override
    public List<Document> getCheapestAuctionByCategory() {

        UnwindOperation unwindOperation
                = Aggregation.unwind("startPrice");

        SortOperation sortOperation
                = Aggregation.sort(Sort.Direction.DESC, "startPrice");
        GroupOperation groupOperation
                = Aggregation.group("startPrice").first(Aggregation.ROOT).as("cheapestAuction");

        Aggregation aggregation
                = Aggregation.newAggregation(unwindOperation, sortOperation, groupOperation);

        List<Document> auction
                = mongoTemplate.aggregate(aggregation, Auction.class, Document.class).getMappedResults();
        return auction;
    }


 */
    @Override
    public List<Document> getCheapestAuctionByCategory() {

        SortOperation sortOperation
                = Aggregation.sort(Sort.Direction.ASC, "startPrice");


        Aggregation aggregation
                = Aggregation.newAggregation( sortOperation);

        List<Document> auction
                = mongoTemplate.aggregate(aggregation, Auction.class, Document.class).getMappedResults();
        return auction;
    }

    @Override
    public List<Document> getAuctionByDate() {

        UnwindOperation unwindOperation
                = Aggregation.unwind("start");
        GroupOperation groupOperation
                = Aggregation.group("");

        return null;
    }


}
