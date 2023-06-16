package com.example.SpringBackend.repository;

import com.example.SpringBackend.collection.Seller;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SellerRepository extends MongoRepository<Seller, String> {

    List<Seller> findByName(String name);
}
