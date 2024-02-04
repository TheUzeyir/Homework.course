import styles from "./App.module.css"
import Accordion from './Components/Accordion'
import {data} from "./AccordionData/AccordionData"


function App() {
  return (
    <>
    <div className={styles.accordion}>
        {data.map((item) => (
          <Accordion key={item.id} id={item.id} title={item.title} desc={item.desc} />
        ))}
    </div> 
    </>
  );
}


export default App
