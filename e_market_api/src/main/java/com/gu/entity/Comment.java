package com.gu.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Getter
@Setter
public class Comment extends BaseEntity{


    private String text;
    private boolean sentiment;
    @ManyToOne
    @JsonBackReference
    private Product product;

}
