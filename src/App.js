import logo from './logo.svg';
import './App.css';
import PersonDetail from './Components/PersonDetail/PersonDetail';
import AllPersonList from './Components/AllPersonList/AllPersonList';
import { useState } from 'react';
import DefaultPersonDetail from './Components/DefaultPersonDetail/DefaultPersonDetail';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [clickedPersonData, setClickedPersonData] = useState(null)
  // console.log(clickedPersonData)
  const [defaultData, setDefaultData] = useState([])
  const [maleFemaleCount, setMaleFemaleCount] = useState([])

  return (
    <>

      <div className="App mb-1">

        <div class="relative">
          <Navbar maleFemaleCount={maleFemaleCount}></Navbar>
          {
            clickedPersonData === null ?
              <>
                {defaultData && <DefaultPersonDetail defaultData={defaultData}></DefaultPersonDetail>}
              </> :
              <>
                {clickedPersonData && <PersonDetail clickedPersonData={clickedPersonData} ></PersonDetail>}
              </>

          }

          <div class="lg:w-3/12 md:w-5/12 ml-auto border-solid border-2 bg-slate-200">
            <AllPersonList setClickedPersonData={setClickedPersonData} clickedPersonData={clickedPersonData} setDefaultData={setDefaultData} setMaleFemaleCount={setMaleFemaleCount}></AllPersonList>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
