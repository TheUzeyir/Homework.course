import "./card.css"

const Card=(props)=>{
   return ( <div className="card">
   <p>{props.text}</p>
   <p>{props.title}</p>
   <button className='btn_card'>Click Ele Coni</button>
</div>)

}

export default Card  