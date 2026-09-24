import React from 'react';
import BookCard from '../components/shared/BookCard';
import type { Ibook } from '@/types/books.type.ts';
const getBooks = async () => {
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = await response.json();
    return data;
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className='container mx-auto my-20'>
             <h2 className='text-4xl font-bold text-black mb-10'>
                Books
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
            {
                booksData.map((book: Ibook, ind:number) => (
                    <BookCard key={ind} book={book}></BookCard>
                ))
            }
            </div>
        </section>
    );
};

export default Books;