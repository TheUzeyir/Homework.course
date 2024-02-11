import style from "./input.module.css"

const Input = ({value,onChange}) => {

    function onChangeHandle(e){
        onChange(e.target.value)
      }

  return (
    <div>
        <input type="text" className={style.input} placeholder="Search Product Name" value={value} onChange={onChangeHandle}/>
    </div>
  )
}

export default Input
