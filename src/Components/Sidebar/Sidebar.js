import React from 'react';
import { HiViewList } from 'react-icons/hi'
import { IoMdExit } from 'react-icons/io'

const Sidebar = () => {
    return (
        <div className='mt-16'>
            <div className='hidden xl:flex flex-col items-center justify-between pt-6 pb-20 h-screen w-[80px] bg-blue-400 min-h-screen inset-0'>
                <HiViewList className='text-4xl font-bold text-white hover:text-gray-300 hover:cursor-pointer' />
                <IoMdExit className='text-4xl font-bold text-white hover:text-gray-300 hover:cursor-pointer' />
            </div>
        </div>
    );
};

export default Sidebar;