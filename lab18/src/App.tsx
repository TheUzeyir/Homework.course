import React, { useState, useEffect } from 'react';
import './App.css'
import Card from './Components/Card/Card'
import Input from './Components/input/Input';




function App() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.products);
      });
  }, []);

  const filteredPosts = posts.filter((post) => post.brand.toLowerCase().includes(input.toLowerCase()));
  const filteredItems = filteredPosts.map((post) => (
    <Card key={post.brand.id} brand={post.brand} />
  ));

  return (
    <>
      <div className="product">
        <Input value={input} onChange={setInput} />
        <div className="product_box">
          {filteredItems}
        </div>
      </div>
    </>
  );
}


export default App
