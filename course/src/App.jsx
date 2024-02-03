import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Header from './common/header/Header'
import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
import Contack from "./pages/contack/Contack.jsx"
// import Footer from './common/footer/footer.jsx'

function App() {

  return (
    <>
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contack' element={<Contack/>}/>
        </Routes>

        {/* <Footer/> */}

      </Router>
    </>
  )
}

export default App
