package com.gu.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Getter
@Setter
public class Product extends BaseEntity{


    private String description;
    private int price;

    @OneToMany(mappedBy = "product")
    private List<Comment> comments;

}
