import { onValue, ref } from 'firebase/database';
import React, { useEffect, useRef, useState } from 'react';
import { database } from '../../Firebase/firebase.init';

const FilterModal = ({ data, setData, setOpenModal, setClickedPersonData }) => {
    const [treatDate, setTreatDate] = useState('');
    const [filterData, SetFilterData] = useState([])


    useEffect(() => {
        onValue(ref(database), snapshot => {
            const data = snapshot.val()
            if (data !== undefined) {
                SetFilterData(data.allData)
            }
        })
    }, []);


    const buttonRef = useRef(null);

    function handleClick() {
        buttonRef.current.click();
    }

    // console.log(treatDate)
    const handleChange = event => {
        setTreatDate(event.target.value);
    };
    // console.log(data)
    // console.log(test)
    function handleClick() {
        buttonRef.current.click();
    }

    const handleFilter = (e) => {
        e.preventDefault();
        const allData = e.target;
        const gender = allData.gender.value;
        const location = allData.location.value

        if (gender || location || treatDate) {
            const Filter = filterData.filter(da => {
                return (
                    da.Gender === gender ||
                    da.Location === location ||
                    da.Date === treatDate
                )
            })
            setData(Filter)
            setClickedPersonData(null)

        }

    }
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="edit-virtual-appointment" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit-virtual-appointment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-semibold my-5">Filter <span className='font-bold'>{ }</span>  user list?</h3>
                    <form onSubmit={handleFilter}>
                        <div className="mt-2">
                            <span className="font-semibold text-sky-600">Location*</span>
                            <select name='location' className="select select-bordered block bg-white mt-2 border-gray-400 border select-sm w-full" >
                                <option value="" disabled selected>Select Location</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Hyderabad">Hyderabad</option>

                            </select>
                        </div>

                        <div className="mt-2 mb-5">
                            <span className="font-semibold text-sky-600">Gender*</span>
                            <select name='gender' className="select select-bordered block bg-white mt-2 border-gray-400 border select-sm w-full" >
                                <option value="" disabled selected>Select Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>

                            </select>
                        </div>

                        <div className='border border-black'>
                            <h2 className='text-lg font-semibold text-white text-center bg-blue-900 p-2 mb-4'>Select your availability date*</h2>

                            <div className='flex justify-center items-center'>
                                <input onChange={handleChange} type="date" name="appointDate" min="2022-02-03" max="2024-04-30" className='m-3' id="" />
                            </div>

                            <div className='flex justify-center'>
                                <h2 className='text-xl font-semibold text-blue-900 mb-3'>{treatDate ? <p>You have selected <span className='font-bold text-black'>{treatDate}</span></p>
                                    : <p className='text-xl font-semibold text-blue-900'>Please pick a date.</p>}</h2>
                            </div>


                        </div>

                        <div className='flex justify-end items-center gap-4 mt-4'>
                            <button onClick={handleClick} type="submit" className='btn glass bg-blue-500 hover:bg-blue-700 text-black btn-outline' >Confirm</button>
                            <label htmlFor="edit-virtual-appointment" className="btn glass bg-teal-500 hover:bg-teal-600 text-black btn-outline" ref={buttonRef}>Cancel</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;