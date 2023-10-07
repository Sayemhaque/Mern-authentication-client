/* eslint-disable react/prop-types */
const Button = ({children,type,onClick}) => {
    return (
        <button 
        type={type}
        onClick={onClick}
        className="btn"
        >
         {children} 
        </button>
    );
};

export default Button;