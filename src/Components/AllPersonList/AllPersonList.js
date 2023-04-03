import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../../Firebase/firebase.init';
import SinglePersonList from '../SinglePersonList/SinglePersonList';

const AllPersonList = ({ setClickedPersonData, clickedPersonData, setDefaultData }) => {
    // all data store here
    const [data, setData] = useState([]);
    // console.log(data)

    if (clickedPersonData === null) {
        if (data && data.length > 0) {
            setDefaultData(data[0])
        }

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
            <div class="  flex justify-center items-center flex-col p-10">

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