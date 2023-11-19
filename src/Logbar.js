import { useState } from "react";

const Logbar = () => {
    const [logged, setLogged] = useState(false);
    return(
    <div className="loginregister">
        {!logged && <div>
            <button className="loginButton" onClick={()=>{setLogged(true)}}>Login</button>
            <button className="registerButton">Register</button>
        </div>}
        {logged && <p>Logged in</p>}
   </div>
    )
}
 
export default Logbar;