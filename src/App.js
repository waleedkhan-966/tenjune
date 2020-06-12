import React, { useState} from 'react';
import './App.css';
import {Massage} from './massage.js'

function App() {
  let [count, setcount] = useState(1)
   let [isMorning, setMorning] = useState(true)
   return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
     <h1>Day time = {isMorning ? 'Morning' : 'night'}    </h1>
      {/* <Massage></Massage> */}
       <Massage counter={count}/>
       <br/>
       <button onClick={
         ()=> setcount(++count)
       }>
       press me please
      </button>
      <button onClick={() => setMorning(!isMorning)}> 
        Update Day
      </button>
    </div>

  );
}

export default App;
