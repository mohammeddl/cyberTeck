import UserLogin from "../components/userLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem("USER");
        if (user) {
            navigate("/login");
        }
    }, [navigate]);
    return (
        <>
        <div className="flex justify-center my-24">
            
            <UserLogin />
        </div>
            
        </>
    );
}
