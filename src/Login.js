import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import config from './config.json'

const Login = () => {

    const loginUrl = config.SERVER_URL + config.SERVER_PORT + config.ENDPOINT_TOKEN;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const history = useHistory();
    const handleGoBackButton = () => {
        history.push('/');
      }

      const goRegister = () => {
        window.location.href = '/register';
      }

      const handleCreate = (e) => {
        e.preventDefault();
        const user = {username, password};
        const body = JSON.stringify(user);
        const headers = { "Content-Type": "application/json" };
        axios.post(loginUrl, body, {headers: headers}  )
        .then((data) => {
          if(data.status===200){
          console.log(data)
          console.log(data.data.token)
          sessionStorage.setItem("AccessToken", data.data.token);
          sessionStorage.setItem("Username", data.data.username);
          history.push('/');
          window.location.reload()
          }else{
            throw new Error(data);
          }
        })
        .catch((error) => {
          console.log(error);
          if(error.response){
            console.log("yes");
            const data = error.response.data
            setMessage("HTTP " + data.status + " : " + data.message)
          }else{
            setMessage(error.message)
          }

        });

        setUsername("");
        setPassword("");
        
      };
    
    return (  
        <div>
            <form className="createUserForm" onSubmit={handleCreate}>
            <h2>Login into your account</h2>
            <button className="topButton" onClick={goRegister}>Don't have an account?</button><br />
            <label>Username:    </label>
            <input className='registerInput'
            type="text" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label>Password:      </label>
            <input className='registerInput'
            type="password"
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className='inner'><button className="blackButton" >Login</button></div>
            </form>
            
            <div className='inner'><button className="goBackButton" onClick={handleGoBackButton}>Go home</button></div>
            <h3>{message}</h3>
        </div>
        
    );
}
 
export default Login;