import "./input.css"


const Input = ({value,onChange}) => {

  function onHandleChange(e){
    onChange(e.target.value)
  }

  return (
    <div>
      <input type="text" placeholder='Search Product Name' value={value} onChange={onHandleChange}/>
    </div>
  )
}

export default Input
