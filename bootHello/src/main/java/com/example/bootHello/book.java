package com.example.bootHello;

public class book {
    long id;
    String name;
    String author;
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    
    @Override
    public String toString() {
        return "book [author=" + author + ", id=" + id + ", name=" + name + "]";
    }
    public book(long id, String name, String author) {
        this.id = id;
        this.name = name;
        this.author = author;
    }

    
}
