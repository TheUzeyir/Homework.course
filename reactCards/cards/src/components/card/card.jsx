import "./card.css"
import React from 'react'


const Card = (props) => {
  return (
    <div className="main_card">
        <div className="card_box">
            <div className="img">
                <img src={props.img} alt="" />
            </div>

            <h2 className="card_box_title">{props.title}</h2>

            <div className="card_box_name">
                <h4 className="card_box_name_title">{props.name}</h4>
                <div className="card_box_view">
                    <i class="fa-solid fa-eye"></i>
                    <h4 className="card_box_view_number">{props.view}</h4>
                </div>
            </div>

            <div className="popularity_box">
                <div className="popularity_box_star">
                    <h3 className="popularity_box_star_number">{props.start}</h3>
                    <div className="popularity_box_star_box">
                    <i class="icon fa-solid fa-star"></i>
                    <i class="icon fa-solid fa-star"></i>
                    <i class="icon fa-solid fa-star"></i>
                    <i class="icon fa-solid fa-star"></i>
                    <i class="icon fa-regular fa-star"></i>
                    </div>
                </div>    
                <div className="popularity_box_text">{props.popularity}</div>            
            </div>

            <div className="price_box">
                <button className="price_box_btn">Add To Card</button>
                <h2 className="price_box_price">{props.price}$</h2>
            </div>
        </div>
    </div>
  )
}

export default Card
