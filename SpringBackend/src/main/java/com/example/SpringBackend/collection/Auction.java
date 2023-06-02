package com.example.SpringBackend.collection;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
@Document(collection = "auctions")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Auction {


    @Id
    private String auctionId;
    private String title;
    private String description;
    private List<String> images;
    //Seller seller;
    private int startPrice;
    private int reserve;
    private int roof;
    private String start;
    private String end;
}
