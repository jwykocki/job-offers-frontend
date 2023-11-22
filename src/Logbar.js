import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Logbar = () => {
  
    const [token, ] = useState(sessionStorage.getItem("AccessToken"));
    const handleLogoutButton = () => {
        sessionStorage.removeItem("AccessToken");
        window.location.reload();
    }
    
    return(
    <div className="loginregister">
        {!token && <div>
            <Link className='topButton' to={`/login`}>Login</Link>
            <Link className='topButton' to={`/register`}>Register</Link>
        </div>}
        {token && <p className="helloText">Hello, {sessionStorage.getItem("Username")}!</p>}
        {token && <button className="topButton" onClick={handleLogoutButton}>Logout</button>}
   </div>
    )
}
 
export default Logbar;