import React, { useState } from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx'


const Navbar = ({ maleFemaleCount }) => {
    /// male and female count
    const maleCount = maleFemaleCount.filter(male => male.Gender === 'Male')
    const femaleCount = maleFemaleCount.filter(male => male.Gender === 'Female')
    // console.log(maleCount)
    return (

        <div className="navbar bg-primary sticky top-0">
            <div className="flex-1">
                <h2 className='lg:col-span-2 titleLogo uppercase text-3xl font-bold text-teal-700'><span className='text-4xl'>S</span>ecqur<span className='text-4xl text-red-600'>ai</span>se</h2>
            </div>
            <div className='hidden md:flex items-center gap-2 xl:gap-3 mr-6'>
                <RxMagnifyingGlass className='text-white text-4xl font-bold' />
                <input type="text" placeholder="Search ...." className="input input-sm w-full border-none rounded-full bg-blue-700" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <button className='text-white bg-green-300 px-5 py-1'>{maleCount.length}</button>
                    <button className='text-white bg-orange-700 px-5 py-1 ms-5'>{femaleCount.length}</button>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;