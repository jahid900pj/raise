import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { database } from '../../Firebase/firebase.init';
import SinglePersonList from '../SinglePersonList/SinglePersonList';
import { FaFilter } from "react-icons/fa";
import './AllPersonList.css'
import FilterModal from '../FilterModal/FilterModal';

const AllPersonList = ({ setClickedPersonData, clickedPersonData, setDefaultData, setMaleFemaleCount }) => {
    // all data store here
    const [data, setData] = useState([]);
    // console.log(data)
    const [openModal, setOpenModal] = useState(true)

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

                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl font-bold">EVENTS</a>
                    </div>
                    <div className="flex-none">
                        <label htmlFor="edit-virtual-appointment" className="btn btn-square btn-ghost">
                            <FaFilter className='w-5 h-5'></FaFilter>
                        </label>


                    </div>
                </div>
                {
                    openModal && <FilterModal data={data} setData={setData} setOpenModal={setOpenModal}></FilterModal>

                }





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