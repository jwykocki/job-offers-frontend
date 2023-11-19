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
          <div className="inner"  ><Link to="/offerSearch" className="sideButton" id="leftButton" >Search offer by ID</Link></div>
          <div className="inner"><button onClick={fetch} className="mainButton">
            Get offers
          </button></div>
          <div className="inner" ><Link to="/create" className="sideButton" id="rightButton" >Add new offer</Link></div>
       </div>  
      { offers && <OfferList offers={offers} /> }
      
     </div>
  );
  
}
 
export default Home;

