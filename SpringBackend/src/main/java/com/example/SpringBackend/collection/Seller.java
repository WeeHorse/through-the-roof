package com.example.SpringBackend.collection;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Seller {
    private int id;
    private String name;
}
