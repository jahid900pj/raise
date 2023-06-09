import React, { useState } from 'react';
import DefaultPersonDetail from '../DefaultPersonDetail/DefaultPersonDetail';
import PersonDetail from '../PersonDetail/PersonDetail';
import AllPersonList from '../AllPersonList/AllPersonList';
import Navbar from '../Navbar/Navbar';
import { HiViewList } from 'react-icons/hi'
import { IoMdExit } from 'react-icons/io'
import FilterModal from '../FilterModal/FilterModal';

const Home = () => {

    const [clickedPersonData, setClickedPersonData] = useState(null)
    // console.log(clickedPersonData)
    const [defaultData, setDefaultData] = useState([])
    const [maleFemaleCount, setMaleFemaleCount] = useState([])
    return (
        <>
            <div className="App mb-1">

                <div class="relative">
                    <Navbar maleFemaleCount={maleFemaleCount}></Navbar>
                    <div>

                        <div>

                            {
                                clickedPersonData === null ?
                                    <>
                                        {defaultData && <DefaultPersonDetail defaultData={defaultData}></DefaultPersonDetail>}
                                    </> :
                                    <>
                                        {clickedPersonData && <PersonDetail clickedPersonData={clickedPersonData} ></PersonDetail>}
                                    </>

                            }
                        </div>
                    </div>


                    <div class="lg:w-3/12 md:w-5/12 ml-auto border-solid border-2 bg-slate-200">

                        <AllPersonList setClickedPersonData={setClickedPersonData} clickedPersonData={clickedPersonData} setDefaultData={setDefaultData} setMaleFemaleCount={setMaleFemaleCount}></AllPersonList>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;