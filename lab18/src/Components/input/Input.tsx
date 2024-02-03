import "./input.css"

const Input = ({ value, onChange }) => {
  function onChangeHandle(e) {
    onChange(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Search Product Name" value={value} onChange={onChangeHandle} />
    </div>
  );
};


export default Input