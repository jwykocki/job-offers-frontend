import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import config from './config.json'

const Register = () => {

    const registerUrl = config.SERVER_URL + config.SERVER_PORT + config.ENDPOINT_REGISTER;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const history = useHistory();
    const handleGoBackButton = () => {
        history.push('/');
      }
      const goLogin = () => {
        window.location.href = '/login';
      }


      const handleCreate = (e) => {
        e.preventDefault();
        const user = {username, password};
    
        const body = JSON.stringify(user);
        const headers = { "Content-Type": "application/json" };
        axios.post(registerUrl, body, {headers: headers}  )
        .then((data) => {
          if(data.status===201){
          setMessage("Account with username " + data.data.username + " has been created successfully." )
          }else{
            throw new Error(data.data);
          }
        })
        .catch((error) => {
          console.log(error);
          if(error.response){
            console.log("yes");
            const data = error.response.data
            setMessage("HTTP " + data.httpStatus + " : " + data.messages)
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
            <h2>Create an account</h2>
            <button className="topButton" onClick={goLogin}>Already have an acount?</button><br />
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
            <p>Password must be between 6 and 20 characters</p><br />
            <div className='inner'><button className="blackButton" >Register</button></div>
            </form>
            
            <div className='inner'><button className="goBackButton" onClick={handleGoBackButton}>Go home</button></div>
            <h3>{message}</h3>
        </div>
        
    );
}
 
export default Register;