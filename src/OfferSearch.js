import { useState } from "react";
import { useHistory } from "react-router-dom";

const OfferSearch = () => {
    let accessToken = sessionStorage.getItem("AccessToken");
    const history = useHistory();
    const handleGoBackButton = () => {
        history.go(-1);
      }
      
      const goLink = (url) => {
        if(!accessToken){
            window.location.href = `/login`;
            return;
        }
        window.location.href = url;
      }
    
    const [id, setId] = useState('');

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
            <div className="inner"><button className="blackButton" onClick={() => goLink(`/offers/${id}`)}>Search</button></div>
            {!accessToken && <h3 className="mustLoginMessage">You must login first.</h3>}
            </div>
            
        </div>
        
    );
}
 
export default OfferSearch;