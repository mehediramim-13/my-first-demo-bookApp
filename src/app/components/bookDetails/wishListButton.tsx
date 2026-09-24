"use client"

import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

interface IReadButtonProps {
    book: Ibook;
}

const WishListButton = ({ book }: IReadButtonProps) => {

    const { wishList, setWishList } = useContext(BooksContext);

    const handleReadBook = (book: Ibook) => {
        setWishList([...wishList, book]);
        toast.success(` ${book.bookName} added to Your Wishlist`);
    };

    return (
        <button
            className="btn btn-primary w-full sm:w-auto"
            onClick={() => handleReadBook(book)}
        >
            WishList
        </button>
    );
};

export default WishListButton;