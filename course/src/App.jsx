import './App.css'
import Home from "./pages/home/Home.jsx"
// import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
// import Header from './common/header/Header'
// import About from "./pages/about/About.jsx"
// import Contack from "./pages/contack/Contack.jsx"
// import Footer from './common/footer/footer.jsx'
import {useState } from 'react';
import {AppContext} from "./context/appContext.js"

function App() {

  const[person,setPerson]=useState([
  {
      name:"Ruslan",
      age:19,
      country:"Sumgayit", 
      job:"sit amet"
  }
  ]);

  let obj=[{
    name:"amil"
  }]

  const handleClick = ()=>{
    console.log(";kjlhug");
    setPerson(prevValue => [...prevValue, ...person])
  };

  return (
    <>
      {/* <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contack' element={<Contack/>}/>
        </Routes>
        <Footer/>
      </Router> */}

    <AppContext.Provider value={person}>
      <Home />
      <button onClick={handleClick} value={person}>Click me</button>
    </AppContext.Provider>

    </>
  )
}

export default App
