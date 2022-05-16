import React, { useState } from 'react';
import BookModel from '../models/bookModel'

export default function GetBooks() {
    var books = [];

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .then((result)=>{
            for (let item of result) {
                books.push(
                    new BookModel({
                        createdAt: item.createdAt,
                        name: item.name,
                        author: item.author,
                        price: item.price,
                        image: item.image,
                        id: item.id
                    })
                )
            }
        })
        .catch(error => console.log('error', error));
    
    return books;
}