import './home.css'
import { useContext } from 'react';
import { AppContext } from "../../context/appContext";

const Home = () => {
  const person = useContext(AppContext);

  console.log(person);

  return (
    <div>
      
    </div>
  );
}

export default Home;
