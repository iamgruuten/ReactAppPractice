package com.example.bootHello;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class bookController {
    
    @GetMapping(path="/books")
    public List<book> getAllBooks() {
        return Arrays.asList(
            new book(1l, "Mastering Spring", "Quan Sheng"));
    }
    
}
