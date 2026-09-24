import ReadButton from '@/app/components/bookDetails/ReadButton';
import WishListButton from '@/app/components/bookDetails/wishListButton';
import { Ibook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import booksData from '../../../../public/booksData.json';

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
    const { id } = await params;

    const book = (booksData as Ibook[]).find(
        (book) => String(book.bookId) === String(id)
    );

    if (!book) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="card lg:card-side overflow-hidden bg-base-100 shadow-xl">
                <figure className="bg-base-200 p-6 sm:p-8 lg:w-2/5 lg:shrink-0">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={400}
                        height={560}
                        priority
                        className="h-auto w-48 max-w-full rounded-lg object-cover shadow-lg sm:w-60 lg:w-full lg:max-w-xs"
                    />
                </figure>

                <div className="card-body gap-5 p-6 sm:p-8 lg:w-3/5">
                    <div>
                        <h2 className="card-title text-2xl font-bold sm:text-3xl lg:text-4xl">
                            {book.bookName}
                        </h2>
                        <p className="mt-1 text-base text-base-content/70 sm:text-lg">
                            by <span className="font-medium">{book.author}</span>
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <span className="badge badge-primary">{book.category}</span>
                        <span className="badge badge-warning gap-1">
                            ★ {book.rating}
                        </span>
                    </div>

                    {book.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {book.tags.map((tag) => (
                                <span key={tag} className="badge badge-outline">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="divider my-0"></div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="rounded-lg bg-base-200 p-3">
                            <p className="text-xs uppercase tracking-wide text-base-content/60">
                                Total Pages
                            </p>
                            <p className="text-lg font-semibold">{book.totalPages}</p>
                        </div>
                        <div className="rounded-lg bg-base-200 p-3">
                            <p className="text-xs uppercase tracking-wide text-base-content/60">
                                Publisher
                            </p>
                            <p className="text-lg font-semibold">{book.publisher}</p>
                        </div>
                        <div className="rounded-lg bg-base-200 p-3">
                            <p className="text-xs uppercase tracking-wide text-base-content/60">
                                Published
                            </p>
                            <p className="text-lg font-semibold">
                                {book.yearOfPublishing}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-1 text-lg font-semibold">Review</h3>
                        <p className="leading-relaxed text-base-content/80">
                            {book.review}
                        </p>
                    </div>

                    <div className="card-actions flex-col justify-end sm:flex-row">
                        <Link href="/" className="btn btn-ghost w-full sm:w-auto">
                            Back
                        </Link>
                        <ReadButton book={book}></ReadButton>
                        <WishListButton book={book}></WishListButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;