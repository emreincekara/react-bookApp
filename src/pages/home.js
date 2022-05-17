import React, { useState, useEffect } from 'react'
import { bookService } from '../services'

function Home() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await bookService.getAll();
            setBooks(response)
        }
        getData();
    }, []);
    return (
        <ul>
            {books && books.map(item =>
                <li key='{item.id}'>{item.author}</li>
            )}
        </ul>
    )
}
export default Home