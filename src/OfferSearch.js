import { Link } from 'react-router-dom';
import { useState } from "react";
import { useHistory } from "react-router-dom";

const OfferSearch = () => {
    const history = useHistory();
    const handleGoBackButton = () => {
        history.go(-1);
      }
    
    const [id, setId] = useState('');
    const token = localStorage.getItem("accessToken");
    console.log(token);

    return (  
        <div className='search'>
            <label>Offer ID:</label><br />
            <input className='searchInput'
            type="text" 
            required 
            value={id}
            onChange={(e) => setId(e.target.value)}
            /> <br />
            <div className="submitButtons">
            <div className="inner"><button   class="goBackButton" onClick={handleGoBackButton}>Go back</button></div>
            <div className="inner"><Link  class="submitIdButton" to={`/offers/${id}`}>Submit</Link></div>
            </div>
            
        </div>
        
    );
}
 
export default OfferSearch;