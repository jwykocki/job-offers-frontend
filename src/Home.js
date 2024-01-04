import OfferList from "./OfferList";
import useFetch from "./useFetch";
import config from './config.json';
const Home = () => {

  const offersUrl = config.SERVER_URL + config.SERVER_PORT + config.ENDPOINT_OFFERS;



  const { data: offers, loading, error, fetch } = useFetch(
    offersUrl
  );

  if (loading) return <h2> Loading...</h2>;

  if (error) console.log(error);

  const goLink = (url) => {
    let accessToken = sessionStorage.getItem("AccessToken");
    if(!accessToken){
        window.location.href = `/login`;
        return;
    }
    window.location.href = url;
  }

  return (
    <div className="home">
       <div className="titles">
         <h1>JOB OFFERS</h1>
         <h2>Explore new job offers.</h2>
        </div>
        <div className="buttons">
          <div className="inner"  ><button className="sideButton" onClick={() => {goLink('/search')}}>Search offer by ID</button></div>
          <div className="inner"><button onClick={fetch} className="mainButton">
            Get offers
          </button></div>
          <div className="inner" ><button className="sideButton" onClick={() => {goLink('/create')}}>Add new offer</button></div>
       </div>  
      { offers && <OfferList offers={offers} /> }
      { error && <h3>An error occured <br/> {error}</h3>}

    </div>
  );
}
 
export default Home;
