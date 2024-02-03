import React, { useState } from 'react';
import './home.css'

const Home = () => {

    // const[name,setName]=useState('Memmedov')
    // const changeName=()=>{
    //   setName("uzeyir")
    // }

    const[input,setInput]=useState("")
  
    return (
      <div>

        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

        <p>this is name {input}</p>
        {/* <button onClick={changeName}>Click Btn</button>   */}

      </div>
    );
}

export default Home