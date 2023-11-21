
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const history = useHistory();
    const handleGoBackButton = () => {
        history.go(-1);
      }

      const handleCreate = (e) => {
        e.preventDefault();
        const user = {username, password};
    
        fetch("http://localhost:8080/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }).then((res) => {
          console.log(res);
          if(res.status===201){
            setMessage("User created succesfully");

          }
          else if(res.status===409){
            setMessage("User already exists");
          }
          else{
            setMessage(res)
          }
        
        });
        setUsername("");
        setPassword("");
        
      };
    
    return (  
        <div>
            <form className="createUserForm" onSubmit={handleCreate}>
            <h2>Create an account</h2>
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
            <div className='inner'><button className="submitRegisterButton" >Register</button></div>
            </form>
            
            <div className='inner'><button className="goBackButton" onClick={handleGoBackButton}>Go home</button></div>
            <h3>{message}</h3>
        </div>
        
    );
}
 
export default Register;