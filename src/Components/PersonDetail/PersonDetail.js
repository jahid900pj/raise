import React from 'react';

const PersonDetail = ({ clickedPersonData, defaultData }) => {
    const { Img } = clickedPersonData


    return (
        <div class="relative md:fixed w-full md:w-7/12 min-h-screen inset-0">
            <h1 class="absolute bottom-0 left-0 p-20 text-white text-8xl">Benny<br />The Pup</h1>
            <img src={Img} class="object-cover w-full h-full" alt='' />
            {/* <img src={`https://i.ibb.co/WPQHJdp/Female13.jpg`} class="object-cover w-full h-full" alt='' /> */}
        </div>
    );
};

export default PersonDetail;