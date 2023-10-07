import { useState } from "react";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {
            email: e.target.email.value,
            password: e.target.password.value,

        }
        const validationErrors = {}
        if (!userData.username || !userData.email || !userData.password) {
            setErrors("All the fields required")
        }
        if (!userData.email) {
            validationErrors.email = "email is required"
        }
        if (!userData.password) {
            validationErrors.password = "password is required"
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await fetch("https://auth-phi-vert.vercel.app/login", {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            if (data.success) {
                localStorage.setItem("token", data.token)
                navigate("/")
            }
            if (data.error) {
                setErrors({ general: data.error });
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        console.log(userData)
    }
    return (
        <form onSubmit={handleSubmit} className="signup">
            <InputBox
                labelText={"email"}
                type={"email"}
                placeholder={"example@gmail.com"}
                name={"email"}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <InputBox
                labelText={"password"}
                type={"password"}
                placeholder={"password"}
                name={"password"}
            />
            {errors.password && <p className="error">{errors.password}</p>}
            {errors.general && <p className="error">{errors.general}</p>}
            <Button type={"submit"}>
                Log In
            </Button>
           <div style={{textAlign:"center",marginTop:"10px"}}>
            <p>Do not have an account?</p>
           <Link  to='/signup'>sign up</Link>
           </div>
        </form>
    );
};

export default Login;