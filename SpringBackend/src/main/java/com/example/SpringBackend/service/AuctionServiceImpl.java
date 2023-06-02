package com.example.SpringBackend.service;

import com.example.SpringBackend.collection.Auction;
import com.example.SpringBackend.repository.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionServiceImpl implements AuctionService{

    @Autowired
    private AuctionRepository auctionRepository;



    @Override
    public String save(Auction auction) {
        return auctionRepository.save(auction).getAuctionId();
    }

    @Override
    public List<Auction> getAuctionStartWith(String name) {
        return auctionRepository.findByTitleStartsWith(name);
    }
}
