import React from 'react';
import BookCard from '../shared/BookCard';
import type { Ibook } from '@/types/books.type';
import booksData from '../../../../public/booksData.json';

const Books = () => {
    return (
        <section className='container mx-auto my-20'>
            <h2 className='text-4xl font-bold text-black mb-10 text-center'>
                Explore our Books Collection
            </h2>
            <p className='text-center'>From timeless classics to new releases, find your next great read.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
                {
                    (booksData as Ibook[]).slice(0, 6).map((book: Ibook) => (
                        <BookCard key={book.bookId} book={book}></BookCard>
                    ))
                }
            </div>
        </section>
    );
};

export default Books;