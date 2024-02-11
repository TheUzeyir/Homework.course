import { useState } from 'react'
import Card from '../../Components/card/Card'
import Input from '../../Components/input/Input'
import {productData} from "../../productData/ProductData"
import styles from "./main.module.css"
import { SlBasketLoaded } from "react-icons/sl";
import { IoFilterCircleSharp } from "react-icons/io5";
import Bag from '../../Components/bag/Bag'


const Main = () => {

  const[input,setInput]=useState("")

  function clickBTn(){
    console.log("click");
    
  }
  
  const filteredInput=productData.filter((productData)=>productData.name.toLowerCase().includes(input.trim().toLocaleLowerCase()))
  const filteredData = filteredInput.map((item) => (
    <Card key={item.id} id={item.id} img={item.img} name={item.name} desc={item.desc} price={item.price} />
    ));
    

  return (
    <div className={styles.container}>
      <div className={styles.search_box}>
        <div className={styles.filter_box}> <h2>Filter</h2> <IoFilterCircleSharp className={styles.search_box_filter_icob}/></div>
        <Input value={input} onChange={setInput} />
        <SlBasketLoaded className={styles.search_box_bag}/>
      </div>
      <div className={styles.products}>
        <Bag onClick={clickBTn}/>
        {filteredData}
      </div>
    </div>

  )
}

export default Main
