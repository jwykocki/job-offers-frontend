import OfferList from "./OfferList";
import useFetch from "./useFetch";

const Home = () => {

  const offerUrl = 'http://localhost:8080/offers';

  const { data: offers, loading, error, fetch } = useFetch(
    offerUrl
  );

  if (loading) return <h1> Loading...</h1>;

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

    </div>
  );
}
 
export default Home;

//<Link to="/offerSearch" className="sideButton" id="leftButton" >Search offer by ID</Link>
