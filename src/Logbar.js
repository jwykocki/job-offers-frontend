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
            <Link className='loginButton' to={`/login`}>Login</Link>
            <Link className='registerButton' to={`/register`}>Register</Link>
        </div>}
        {token && <p>Logged in</p>}
        {token && <button className="logoutBoutton" onClick={handleLogoutButton}>Logout</button>}
   </div>
    )
}
 
export default Logbar;