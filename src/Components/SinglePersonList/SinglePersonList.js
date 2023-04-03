import React from 'react';

const SinglePersonList = ({ singleData, setClickedPersonData }) => {
    return (
        <div>
            <h1 className='text-3xl' onClick={() => setClickedPersonData(singleData)}>{singleData.Name}</h1>
        </div>
    );
};

export default SinglePersonList;