"use client"

import ListedBookCard from '@/app/components/shared/ListedBookCard';
import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {

    const { readBooks, wishList } = useContext(BooksContext);
    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

    const sortBooks = (books: Ibook[]) => {
        const sortedBooks = [...books];
        if (sortBy === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        return sortedBooks;
    };

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishList = sortBooks(wishList);

    return (

        <div className='container mx-auto px-4 py-[20px]'>

            <h2 className='my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center'>Listed Books</h2>

            <div className='text-center'>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                    className="select select-success"
                >
                    <option disabled={true}>Sort By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of Pages</option>
                    <option value={"year"}>Published Year</option>
                </select>
            </div>

            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`My Read Books (${readBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-4 sm:p-6">
                    {
                        readBooks.length > 0 ?
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                {sortedReadBooks.map((book: Ibook) => {
                                    return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
                                })}
                            </div> : <p className='text-center text-lg font-semibold'>No Read books Found</p>
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`My Wish List (${wishList.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-4 sm:p-6">
                    {
                        wishList.length > 0 ?
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                {sortedWishList.map((book: Ibook) => {
                                    return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
                                })}
                            </div> : <p className='text-center text-lg font-semibold'>No WishList Found</p>
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;