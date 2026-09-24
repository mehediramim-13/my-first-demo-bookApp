"use client"

import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

interface IReadButtonProps {
    book: Ibook;
}

const ReadButton = ({ book }: IReadButtonProps) => {

    const { readBooks, setReadBooks } = useContext(BooksContext);

    const handleReadBook = (book: Ibook) => {
        setReadBooks([...readBooks, book]);
        toast.success(`You have read ${book.bookName}`);
    };

    return (
        <button
            className="btn btn-primary w-full sm:w-auto"
            onClick={() => handleReadBook(book)}
        >
            Read
        </button>
    );
};

export default ReadButton;