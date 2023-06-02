package com.example.SpringBackend.service;

import com.example.SpringBackend.collection.Auction;

import java.util.List;

public interface AuctionService {
    String save(Auction auction);

    List<Auction> getAuctionStartWith(String title);
}
