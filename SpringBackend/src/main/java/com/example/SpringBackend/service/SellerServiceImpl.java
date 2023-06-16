package com.example.SpringBackend.service;


import com.example.SpringBackend.collection.Seller;
import com.example.SpringBackend.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SellerServiceImpl implements SellerService{

    @Autowired
    private SellerRepository sellerRepository;

    @Override
    public String save(Seller seller) {
        return sellerRepository.save(seller).getSellerId();
    }

    @Override
    public List<Seller> getSellerByName(String name) {
        return sellerRepository.findByName(name);
    }
}
