package com.example.SpringBackend.controller;


import com.example.SpringBackend.collection.Auction;
import com.example.SpringBackend.service.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auction")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @PostMapping
    public String save(@RequestBody Auction auction){
        return auctionService.save(auction);

    }

    @GetMapping
    public List<Auction> getAuctionStartWith(@RequestParam("title") String title){
        return
                auctionService.getAuctionStartWith(title);
    }
}
