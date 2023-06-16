package com.example.SpringBackend.service;

import com.example.SpringBackend.collection.Seller;

import java.util.List;

public interface SellerService {
    String save(Seller seller);

    List<Seller> getSellerByName(String name);
}
