package com.example.SpringBackend.repository;

import com.example.SpringBackend.collection.Auction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionRepository extends MongoRepository<Auction, String> {

    List<Auction> findByTitleStartsWith(String title);
}
