import { Link } from 'react-router-dom';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const OfferSearch = () => {
    const history = useHistory();
    const handleGoBackButton = () => {
        history.go(-1);
      }
    
    const [id, setId] = useState('');


    return (  
        <div>
           
            <label>Offer ID:</label>
            <input 
            type="text" 
            required 
            value={id}
            onChange={(e) => setId(e.target.value)}
            />
            <Link to={`/offers/${id}`}>Submit</Link>
            <div><button onClick={handleGoBackButton}>Go back</button></div>
        </div>
        
    );
}
 
export default OfferSearch;