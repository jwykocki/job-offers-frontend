import { Link } from 'react-router-dom';
import { useState } from "react";

const OfferSearch = () => {
    
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
            
            
    
                    
        </div>
        
    );
}
 
export default OfferSearch;