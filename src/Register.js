import { Link } from 'react-router-dom';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();
    const handleGoBackButton = () => {
        history.go(-1);
      }
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (  
        <div>
            <h2>Create an account</h2>
            <label>Username:</label>
            <input 
            type="text" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input 
            type="password"
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <Link to={`/register`}>Submit</Link>
            <div><button onClick={handleGoBackButton}>Go back</button></div>
        </div>
        
    );
}
 
export default Register;