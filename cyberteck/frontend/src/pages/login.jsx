import { useNavigate } from "react-router-dom";
import { useUserContext } from "../components/context/UserContext";
import UserLogin from "../components/userLogin";


export default function Login() {

    const {authenticated }=useUserContext()

    const navigate = useNavigate();

    if(authenticated){
        navigate('/eccommerce')
    }
    
    return (
        <>
        <div className="flex justify-center my-24">
            
            <UserLogin />
        </div>
            
        </>
    );
}
