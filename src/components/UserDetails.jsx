import { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const navigate = useNavigate()


    const handleLogOut = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
    useEffect(() => {
        localStorage.getItem("token")
        const getUser = async () => {
            const res = await fetch("https://auth-phi-vert.vercel.app/user", {
                headers: {
                    Authorization: token,
                }
            })
            const data = await res.json()
            setUser(data.user)
            console.log(data)
        }
        getUser()
    }, [])
    console.log(user)
    return (
        <section className="wrap">
            {!token ?
                <div
                    style={{ textAlign: "center", marginTop: "10px", backgroundColor: "white", padding: "100px", borderRadius: "10px" }}>
                    <p>Please Log in</p>
                    <Link to='/login'>Log in</Link>
                </div>
                :
                <div className="userDetails">
                    <p className="username"><span>username-</span>{user?.username}</p>
                    <p className="useremail"><span>Email-</span>{user?.useremail}</p>
                    <Button
                        onClick={handleLogOut}
                    >
                        Log out
                    </Button>
                </div>}
        </section>
    );
};

export default UserDetails;