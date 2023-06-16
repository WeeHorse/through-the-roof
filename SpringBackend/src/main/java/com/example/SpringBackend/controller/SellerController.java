package com.example.SpringBackend.controller;


import com.example.SpringBackend.collection.Seller;
import com.example.SpringBackend.service.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/seller")
public class SellerController {
    @Autowired
    private SellerService sellerService;

    @PostMapping
    public String save(@RequestBody Seller seller){
        return sellerService.save(seller);

    }

    @GetMapping("/findSellerByName")
    public List<Seller> getSellerByName(@RequestParam("name") String name){
        return sellerService.getSellerByName(name);

    }
}
