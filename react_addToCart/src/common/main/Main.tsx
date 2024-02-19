import React, { useEffect, useState } from 'react'
import style from "./main.module.css"
import Card from '../../components/card/Card'
import axios from 'axios' 
import Modal from '../../components/modal/Modal'


const Main = () => {
  const[data,setData]=useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  }, []);
  

  return (
    <div className={style.card}>
      {data.map((item):any => (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
        />
      ))}
      <Modal/>
    </div>
  )
}

export default Main
