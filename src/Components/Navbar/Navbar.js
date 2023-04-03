import React, { useState } from 'react';

const Navbar = ({ maleFemaleCount }) => {
    /// male and female count
    const maleCount = maleFemaleCount.filter(male => male.Gender === 'Male')
    const femaleCount = maleFemaleCount.filter(male => male.Gender === 'Female')
    // console.log(maleCount)
    return (

        <div className="navbar bg-primary sticky top-0">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl text-lime-700" >SECQURAISE</a>
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