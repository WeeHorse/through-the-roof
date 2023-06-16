package com.example.SpringBackend.controller;


import com.example.SpringBackend.collection.Auction;
import com.example.SpringBackend.service.AuctionService;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        auctionService.delete(id);

    }

    @GetMapping("/price")
    public List<Auction>getAuctionByPrice(@RequestParam Integer minPrice,
                                          @RequestParam Integer maxPrice){
    return auctionService.getAuctionByPrice(minPrice, maxPrice);
    }


    @GetMapping("/search")
    public Page<Auction> searchAuction(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) Integer minPrice,
            @RequestParam(required = false) Integer maxPrice,
            @RequestParam(required = false) String start,
            @RequestParam(required = false) String end,
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "0") Integer size
    ){
        Pageable pageable
                = PageRequest.of(page, size);
                return auctionService.search(title, minPrice, maxPrice, start, end, pageable);

    }
    @GetMapping("/cheapestAuction")
    public List<Document> getCheapestAuction(){
        return auctionService.getCheapestAuctionByCategory();
    }

    @GetMapping("/auctionsByDate")
    public List<Document> getAuctionByDate(){
        return auctionService.getAuctionByDate();
    }
}
