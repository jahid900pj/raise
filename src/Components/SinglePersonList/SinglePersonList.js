import React from 'react';

const SinglePersonList = ({ singleData, setClickedPersonData }) => {
    // console.log(singleData)


    return (
        <button onClick={() => setClickedPersonData(singleData)} className='bg-white w-full p-2'>
            <div className='bg-slate-200 w-full font-semibold  hover:text-white  hover:bg-zinc-500'>
                <div className='flex justify-between p-2 '>
                    <p ><span>{singleData.id}</span>: {singleData.Location
                    }</p>
                    <p className='text-sm'><span>{singleData.Date}</span>     <span>{singleData.Time}</span></p>
                </div>
                <p className='p-2 text-start'>Person detected.</p>
            </div>
        </button>
    );
};

export default SinglePersonList;
