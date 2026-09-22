// ai help neye chile organige korte pare vaiyar moto
import Image from 'next/image';
 
import React from 'react';
// import bannerImg from '@/assets/hero_img.jpg';
import bannerImg from '@/src/assets/hero_img.jpg';
// import bannerImg from '@/assets/hero-img.jpg'
// import bannerImg from '../../assets/hero-img.jpg';
// import bannerImg from '@/src/assets/hero-img.jpg';
// import logo from '@/src/assets/book.ico';-
const Bannar = () => {
    return (
        <section className='px-10 py-20'>
            
            <div className='container mx-auto grid grid-cols-2 gap-4 items-center bg-slate-300 rounded-4xl p-4'>
              
               <div className='space-y-4'>
                <h2 className='font-bold text-3xl'>
                    Books to freshen up<br/> your bookshelf
                    </h2>
                <button className='btn btn-success'>View The List</button>
            </div>
            <div>
                <Image src={bannerImg} alt="Banner" />
            </div>
        </div>
        </section>
    );
};

export default Bannar;