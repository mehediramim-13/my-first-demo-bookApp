import { Ibook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IListedBookCardProps {
    book: Ibook;
}

const ListedBookCard = ({ book }: IListedBookCardProps) => {
    return (
        <div className="card sm:card-side overflow-hidden border border-base-300 bg-base-100 shadow-sm transition hover:shadow-md">
            {/* Cover */}
            <figure className="bg-base-200 p-4 sm:w-40 sm:shrink-0 md:w-44">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={200}
                    height={280}
                    className="h-auto w-32 rounded-md object-cover shadow sm:w-full"
                />
            </figure>

            {/* Info */}
            <div className="card-body gap-3 p-4 sm:p-5">
                <div>
                    <h3 className="card-title text-lg leading-snug sm:text-xl">
                        {book.bookName}
                    </h3>
                    <p className="text-sm text-base-content/70">
                        by <span className="font-medium">{book.author}</span>
                    </p>
                </div>

                {/* Category + rating */}
                <div className="flex flex-wrap items-center gap-2">
                    <span className="badge badge-primary badge-sm sm:badge-md">
                        {book.category}
                    </span>
                    <span className="badge badge-warning badge-sm gap-1 sm:badge-md">
                        ★ {book.rating}
                    </span>
                </div>

                {/* Tags */}
                {book.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {book.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="badge badge-outline badge-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Meta */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-base-content/70">
                    <span>📖 {book.totalPages} pages</span>
                    <span>🏢 {book.publisher}</span>
                    <span>📅 {book.yearOfPublishing}</span>
                </div>

                <div className="card-actions justify-end">
                    <Link
                        href={`/Books/${book.bookId}`}
                        className="btn btn-primary btn-sm w-full sm:w-auto"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;