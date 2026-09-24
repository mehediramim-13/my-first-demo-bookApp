"use client";
import { createContext, ReactNode, useState } from 'react';
import { Ibook } from '@/types/books.type';

interface IBooksContext {
    readBooks: Ibook[];
    setReadBooks: React.Dispatch<React.SetStateAction<Ibook[]>>;
    wishList: Ibook[];
    setWishList: React.Dispatch<React.SetStateAction<Ibook[]>>;
}

export const BooksContext = createContext<IBooksContext>({
    readBooks: [],
    setReadBooks: () => {},
    wishList: [],
    setWishList: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
    const [readBooks, setReadBooks] = useState<Ibook[]>([]);
    const [wishList, setWishList] = useState<Ibook[]>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList,
    };

    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;