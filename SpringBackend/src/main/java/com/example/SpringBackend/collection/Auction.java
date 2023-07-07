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
    private String images;
    private int startPrice;
    private int roof;
    private String start;
    private String end;
    private String sellerId;
    private double currentHighestBid;
    private String highestBidderId;
    private String status;



    public void setCurrentHighestBid(double bidAmount) {
        this.currentHighestBid = bidAmount;
    }

    public double getCurrentHighestBid() {
        return currentHighestBid;
    }

    public void setHighestBidderId(String bidderId) {
        this.highestBidderId = bidderId;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}