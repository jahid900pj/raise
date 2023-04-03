import logo from './logo.svg';
import './App.css';
import PersonDetail from './Components/PersonDetail/PersonDetail';
import AllPersonList from './Components/AllPersonList/AllPersonList';
import { useState } from 'react';
import DefaultPersonDetail from './Components/DefaultPersonDetail/DefaultPersonDetail';


function App() {
  const [clickedPersonData, setClickedPersonData] = useState(null)
  // console.log(clickedPersonData)
  const [defaultData, setDefaultData] = useState([])
  console.log(defaultData)

  return (
    <div className="App">
      <div class="relative">
        {
          clickedPersonData === null ?
            <>
              {defaultData && <DefaultPersonDetail defaultData={defaultData}></DefaultPersonDetail>}
            </> :
            <>
              {clickedPersonData && <PersonDetail clickedPersonData={clickedPersonData} ></PersonDetail>}
            </>

        }

        <div class="w-full md:w-5/12 ml-auto">
          <AllPersonList setClickedPersonData={setClickedPersonData} clickedPersonData={clickedPersonData} setDefaultData={setDefaultData}></AllPersonList>
        </div>
      </div>
    </div>
  );
}

export default App;
