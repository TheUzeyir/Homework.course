import AppMain from './components/app-main/AppMain'
import style from "./App.module.css"
import CreateFeedBack from './components/createFeedBack/CreateFeedBack'
import Errorpage from './components/errorpage/Errorpage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {

  return (
    <div className={style.appbox}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppMain />}></Route>
        <Route index path='createFeedBack' element={<CreateFeedBack/>}/>
        <Route index path='*' element={<Errorpage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
