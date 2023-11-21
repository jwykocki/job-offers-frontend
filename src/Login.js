import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const history = useHistory();
    const handleGoBackButton = () => {
        history.push('/');
      }

      const handleCreate = (e) => {
        e.preventDefault();
        const user = {username, password};
    
        fetch("http://localhost:8080/token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }).then((res) => {
          console.log(res);
          if(res.status===200){
            const token = 'token';
            sessionStorage.setItem("AccessToken", token);
            history.push('/')
            window.location.reload()
          }
          else{
            setMessage("problem")
            console.log(res)
          }
        
        });
        setUsername("");
        setPassword("");
        
      };
    
    return (  
        <div>
            <form className="createUserForm" onSubmit={handleCreate}>
            <h2>Login into your account</h2>
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
            <div className='inner'><button className="submitRegisterButton" >Login</button></div>
            </form>
            
            <div className='inner'><button className="goBackButton" onClick={handleGoBackButton}>Go home</button></div>
            <h3>{message}</h3>
        </div>
        
    );
}
 
export default Login;