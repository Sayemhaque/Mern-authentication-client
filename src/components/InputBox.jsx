/* eslint-disable react/prop-types */
const InputBox = ({ type, placeholder, labelText,name }) => {

  return (
    <div className="input-group">
      <label>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  )

};

export default InputBox;