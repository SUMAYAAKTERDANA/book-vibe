import Image from 'next/image';
import React from 'react';
// import logo from '@/assets/book.ico';
// import logo from '@/app/assets/book.ico';
import logo from '@/src/assets/book.ico';
import Link from 'next/link';

const Navbar = () => {
    return (
       <nav className= 'bg-base-100 shadow-sm' > 
        <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
          <li><a>Item 1</a></li>
          
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className='flex gap-2 item'>Book VIbe
   <Image src={logo} alt="Book Vibe logo" /></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><Link href='/books'>Books</Link></li>
     <li><Link href='/listedBooks'>Listed Books</Link></li>
      
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <button className="btn btn-success ">Sign in</button>
    <button className="btn btn-error">Sign up</button>
  </div>
</div>
</nav>
    );
};

export default Navbar;

