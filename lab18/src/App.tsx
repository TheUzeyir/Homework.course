import React, { useState, useEffect } from 'react';
import "./App.css"
import Input from './Components/input/Input';
import Card from './Components/Card/Card'

const App = () => {

  const[post,setPost]=useState([])
  const[input,setInput]=useState("")

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {setPost(data.products);});
    },[]);
  
  const filterPost=post.filter((post)=>post.brand.toLowerCase().includes(input.toLowerCase()));
  const filterData=filterPost.map((post) => (
    <Card key={post.brand.id} brand={post.brand} />
  ));


  return (
    <div className="product">
    <Input value={input} onChange={setInput} />
    <div className="product_box">
      {filterData}
    </div>
  </div>
  )
}

export default App
