import './App.css'
import Menu from "./components/menuitem/menuItem.jsx"

let arr=[
  {
    date:"2546.18.94",
    title:"Ruslan Mirzeliyev",
    btn:"Download"
  },
  {
    date:"9654.48.98",
    title:"Uzeyir Mammadov" ,
    btn:"Click"
  },
  {
    date:"1639.23.42",
    title:"Rakif Ramazanov",
    btn:"Hack"
  },
  {
    date:"3301.35.55",
    title:"Amil Musaevi" ,
    btn:"Change"
  },
  {
    date:"4404.18.94" ,
    title:"Jamil Ibrahimli",
    btn:"Download"
  },
]

function App() {
  return (
    <div>
  {arr.map((props) => (
        <Menu date={props.date} title={props.title} btn={props.btn} />
      ))}   
    </div>
    )
}

export default App 
