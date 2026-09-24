import React from 'react';
import Image from 'next/image';
import heroImg from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className='py-12 md:py-20 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center container mx-auto bg-gradient-to-br from-[#F3F3F3] to-[#E8E8E8] rounded-3xl md:rounded-4xl p-8 md:p-16 overflow-hidden relative'>
                <div className='space-y-6 relative z-10 text-center md:text-left order-2 md:order-1'>
                    <span className='inline-block px-4 py-1.5 bg-white text-sm font-medium text-gray-600 rounded-full shadow-sm'>
                        New Arrivals Weekly
                    </span>
                    <h2 className='font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900'>
                        Books to freshen up <br className='hidden md:block' /> your bookshelf
                    </h2>
                    <p className='text-gray-500 text-base md:text-lg max-w-md mx-auto md:mx-0'>
                        Discover handpicked stories that inspire, entertain, and transform the way you see the world.
                    </p>
                    <div className='flex gap-4 justify-center md:justify-start pt-2'>
                        <button className='btn btn-success rounded-full px-8 text-base shadow-lg shadow-green-500/20 hover:scale-105 transition-transform'>
                            View the task
                        </button>
                        <button className='btn btn-ghost rounded-full px-8 text-base hover:bg-white'>
                            Learn more
                        </button>
                    </div>
                </div>
                <div className='relative order-1 md:order-2'>
                    <div className='absolute inset-0 bg-gradient-to-tr from-green-200 to-transparent rounded-3xl blur-2xl opacity-40'></div>
                    <Image
                        src={heroImg}
                        alt='hero picture'
                        className='relative rounded-3xl w-full h-auto object-cover shadow-2xl'
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;