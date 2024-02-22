import AppFilter from './components/app-filter/AppFilter'
import AppMain from './components/app-main/AppMain'
import style from "./App.module.css"
import Errorpage from './components/errorpage/Errorpage'
import CreateFeedBack from './components/createFeedBack/CreateFeedBack'

function App() {

  return (
    <div className={style.appbox}>
    <AppFilter/>
    <AppMain/>
    {/* <CreateFeedBack/> */}
    {/* <Errorpage/>   */}
    </div>
  )
}

export default App
