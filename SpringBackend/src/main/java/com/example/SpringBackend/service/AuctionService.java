package com.example.SpringBackend.service;

import com.example.SpringBackend.collection.Auction;
import org.bson.Document;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface AuctionService {
    String save(Auction auction);

    List<Auction> getAuctionStartWith(String title);

    void delete(String id);

    List<Auction> getAuctionByPrice(Integer minPrice, Integer maxPrice);

    Page<Auction> search(String title, Integer minPrice, Integer maxPrice, String start, String end, Pageable pageable);

    List<Document> getCheapestAuctionByCategory();

    List<Document> getAuctionByDate();
}
