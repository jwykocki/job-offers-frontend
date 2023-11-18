import OfferList from "./OfferList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";


const Home = () => {

  const offerUrl = 'http://localhost:8000/offers';

  const { data: offers, loading, error, fetch } = useFetch(
    offerUrl
  );

  if (loading) return <h1> Loading...</h1>;

  if (error) console.log(error);

  return (
    <div className="home">
      
       <div className="titles">
         <h1>JOB OFFERS</h1>
         <h2>Explore new job offers.</h2>
       </div>
       <div className="buttons">
         
         <Link to="/offerSearch">Search Offer by ID</Link>
         <button onClick={fetch} className="button2">
           Get offers
         </button>
         <button className="button1">Insert new offer</button>
       </div>  
      { offers && <OfferList offers={offers} /> }
      
     </div>
  );
  
}
 
export default Home;

