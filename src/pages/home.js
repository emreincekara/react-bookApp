import React, { useState, useEffect } from 'react'
import axios from 'axios'

import BookCard from '../components/bookCard'

import GetBooks from '../services/service'

function Home() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await axios.get("https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books")
                .then(response => {
                    setBooks(response.data)
                });
        }
        fetchData();
    }, []);
    console.log(books)
    return (
        <div>{books.map((item) => {
            <p>{item.name}</p>
        })}</div>
    )


}

export default Home