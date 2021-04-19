package com.gu.controller;

import com.gu.entity.Comment;
import com.gu.entity.Product;
import com.gu.repo.CommentRepository;
import com.gu.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MarketController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CommentRepository commentRepository;

    @GetMapping
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable int id){
        return productRepository.findById(id).orElse(null);
    }

    @PostMapping//(consumes = "application/x-www-form-urlencoded")
    public void addComment(@RequestBody Comment comment){
        commentRepository.save(comment);
    }



    

}
