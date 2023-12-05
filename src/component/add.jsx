
import axios from 'axios'

import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { baseUrl } from '../constants'

function Add() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/book")
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data.books)
                    setBooks(response.data.books);
                }
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    }, []);
    const handleAdd = (book) => {
        // Add your logic for handling the "Add" button click
        console.log('Adding book:', book);
    }
    return (
        <div>
            <div style={{ display: 'flex', gap: 20, flex: 1 }}>
                {books.length == 0 && <p>You have no products yet!</p>}
                {books.map(book => (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        border: '1px solid black',
                        borderRadius: 5,
                        padding: 10,
                        alignSelf: 'start'
                    }}>
                        {/* <img src={baseUrl + bookings.img} alt='' style={{
                width: 150,
                height: 150,
                objectFit: 'cover'
            }} /> */}
                        <p>{book.phoneNumber}</p>
                        <p>{book.date}</p>
                        <p>Guest {book.guest}</p>

                        <button onClick={() => handleAdd(book)}>Add</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Add
