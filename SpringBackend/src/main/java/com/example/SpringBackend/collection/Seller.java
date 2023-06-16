package com.example.SpringBackend.collection;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "sellers")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Seller {
    @Id
    private String sellerId;
    private String name;
    private String email;
    private String address;
}
