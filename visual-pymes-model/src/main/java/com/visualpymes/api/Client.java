package com.visualpymes.api;

import javax.persistence.*;


@Entity
@Table(name = "clients")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String image;
    @Lob
    private String description;
    private double price;
    private String category;


    public Client(){

    }
    public Client(String name, String image, String description, double price, String category) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.category = category;

    }

    public Long getId(){
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() { return image;  }

    public void setImage(String image) { this.image = image; }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice (double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }


}
