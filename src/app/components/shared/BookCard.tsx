import React from 'react';
import Image from 'next/image';
import { Ibook } from '@/types/books.type';
import Link from 'next/link';
interface IBookCardProps {
    book: Ibook
}
const BookCard = ({ book }: IBookCardProps) => {
    return (

        <section>
        <div
           
            key={book.bookId}
            className='max-w-sm bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 border border-gray-100'
        >

            
            <div className='bg-[#F3F3F3] rounded-2xl h-64 flex items-center justify-center overflow-hidden'>
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={160}
                    height={220}
                    className='object-contain h-full w-auto drop-shadow-lg'
                />
            </div>

            <div className='flex flex-wrap gap-2 mt-6'>
                {
                    book.tags.map((tag, index) => (
                        <span
                            key={index}
                            className='px-4 py-1.5 bg-green-50 text-green-600 text-sm font-medium rounded-full'
                        >
                            {tag}
                        </span>
                    ))
                }
            </div>

            <h3 className='text-2xl font-bold text-gray-900 mt-4'>
                {book.bookName}
            </h3>

            <p className='text-gray-500 mt-2'>
                By : {book.author}
            </p>

            <div className='border-t border-dashed border-gray-200 mt-4 pt-4 flex items-center justify-between'>
                <span className='text-gray-600'>{book.category}</span>
                <div className='flex items-center gap-1'>
                    <span className='text-gray-800 font-medium'>{book.rating}</span>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5 text-yellow-400'>
                        <path fillRule='evenodd' d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' clipRule='evenodd' />
                    </svg>
                </div>
            </div>

           <Link href={`/Books/${book.bookId}`}> <button className='w-full mt-5 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2 group'>
                View Details
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='w-4 h-4 group-hover:translate-x-1 transition-transform'>
                    <path d='M5 12h14' />
                    <path d='m12 5 7 7-7 7' />
                </svg>
            </button> </Link>
        </div>
        </section>
    );
};

export default BookCard;