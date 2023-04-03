import React from 'react';

const DefaultPersonDetail = ({ defaultData }) => {
    const { Img } = defaultData;
    return (
        <div class="relative md:fixed w-full md:w-7/12 min-h-screen inset-0">
            <h1 class="absolute bottom-0 left-0 p-20 text-white text-8xl">Benny<br />The Pup</h1>
            <img src={Img} class="object-cover w-full h-full" alt='' />
        </div>
    );
};

export default DefaultPersonDetail;