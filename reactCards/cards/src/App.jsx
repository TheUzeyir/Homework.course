import './App.css'
import Card from "./components/card/card.jsx"
import {data} from "./components/data/data.jsx"

function App() {

  return (
    <>
      <h2>Suggested For You</h2>
      <div  className='main_card'>

      {data.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          title={item.title}
          name={item.name}
          view={item.view}
          popularity={item.popularity}
          start={item.start}
          price={item.price}
        />
      ))}
      </div>
    </>
  )
}

export default App