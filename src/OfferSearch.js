import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const OfferSearch = () => {
    let accessToken = sessionStorage.getItem("AccessToken");
    const history = useHistory();
    const handleGoBackButton = () => {
        history.go(-1);
      }
      
      const goLink = (url) => {
        console.log(id.length)
        if(!accessToken){
            window.location.href = `/login`;
            return;
        }
        window.location.href = url;
      }
    
    const [id, setId] = useState('');
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                console.log(id.length)
                 goLink(`/offers/${id}`)
            }
        };

        const inputElement = document.getElementById('searchInput');

        if (inputElement) {
            inputElement.addEventListener('keydown', handleKeyDown);
            return () => {
                // Cleanup the event listener when the component unmounts
                inputElement.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [id]);

    return (  
        <div className='search'>
            <label>Offer ID:</label><br />
            <input className='searchInput'
            id="searchInput"
            type="text" 
            required 
            value={id}
            onChange={(e) => setId(e.target.value)}
            /> <br />
            <div className="submitButtons">
            <div className="inner"><button   className="goBackButton" onClick={handleGoBackButton}>Go back</button></div>
            <div className="inner"><button className="blackButton" id="confirmButton" onClick={() => goLink(`/offers/${id}`)}>Search</button></div>
            {!accessToken && <h3 className="mustLoginMessage">You must login first.</h3>}
            </div>
            
        </div>
        
    );

    
}
 
export default OfferSearch;