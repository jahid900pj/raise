import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../../Firebase/firebase.init';
import SinglePersonList from '../SinglePersonList/SinglePersonList';
import './AllPersonList.css'

const AllPersonList = ({ setClickedPersonData, clickedPersonData, setDefaultData, setMaleFemaleCount }) => {
    // all data store here
    const [data, setData] = useState([]);
    // console.log(data)

    if (clickedPersonData === null) {
        if (data && data.length > 0) {
            setDefaultData(data[0])
        }

    }

    if (data && data.length > 0) {
        setMaleFemaleCount(data)
    }





    useEffect(() => {
        onValue(ref(database), snapshot => {
            const data = snapshot.val()
            if (data !== undefined) {
                setData(data.allData)
            }
        })
    }, []);

    // console.log(data.allData)
    return (
        <>
            <div class="flex justify-center items-center flex-col pt-10 ps-2 pe-2">

                {
                    data && data.map(singleData =>
                        <SinglePersonList
                            key={singleData.id}
                            singleData={singleData}
                            setClickedPersonData={setClickedPersonData}
                        ></SinglePersonList>)
                }
            </div>

        </>

    );
};

export default AllPersonList;