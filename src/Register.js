
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const history = useHistory();
    const handleGoBackButton = () => {
        history.push('/');
      }
      const goLogin = () => {
        window.location.href = '/register';
      }


      const handleCreate = (e) => {
        e.preventDefault();
        const user = {username, password};
    
        fetch("http://localhost:8080/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }).then(res => {
          if (res.status !== 201) {
            throw new Error(res.status);
          }
          return res.json();
        })
        .then((data) => {
          setMessage("Account has been created successfully.\nUsername: " + data.username)
        })
        .catch((error) => {
          if(error.message==='409'){
            setMessage("User already exists.")
          }
          else if(error.message==='400'){
            setMessage("The form contains errors.")
          }else{
            setMessage("An error occurred: " + error);
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
            <div className='inner'><button className="blackButton" >Register</button></div>
            </form>
            
            <div className='inner'><button className="goBackButton" onClick={handleGoBackButton}>Go home</button></div>
            <h3>{message}</h3>
        </div>
        
    );
}
 
export default Register;