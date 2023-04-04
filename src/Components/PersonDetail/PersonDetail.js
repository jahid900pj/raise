import React from 'react';

const PersonDetail = ({ clickedPersonData, defaultData }) => {
    const { Img, id, Name, Date, Location, Time, Gender } = clickedPersonData


    return (
        <div class="relative md:fixed lg:w-9/12 md:w-7/12 min-h-screen inset-0 ">

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center'>


                <div className='grid content-start mt-24'>
                    <div className='font-bold'>
                        <h5 className='text-2xl '>{id}</h5>
                        <h5 className='text-xl '>Person detected.</h5>
                    </div>
                    <div className='text-xl font-medium	mt-16 mb-16'>
                        <p>Name: {Name}</p>
                        <p>Location: {Location}</p>
                        <p>Date : {Date}</p>
                        <p>Time: {Time}</p>
                    </div>
                    <div className='text-lg font-medium	'>
                        <p>Description : {Name} detected at <br /> {Location} on {Date}</p>
                    </div>
                </div>
                <div className=''>
                    <p className='text-2xl font-bold mb-4 mt-16'>{Gender}</p>
                    <img className='w-4/5 h-screen object-cover' src={Img} alt="" />
                </div>
            </div>
        </div >
    );
};

export default PersonDetail;