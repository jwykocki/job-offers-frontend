import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import printOffer from "./printOffer";
import { useEffect } from "react";
import config from './config.json'

const OfferDetails = () => {
  const offersUrl = config.SERVER_URL + config.SERVER_PORT + config.ENDPOINT_OFFERS;
  const { id } = useParams();
  const url = offersUrl + '/' + id;

  const {
    data: offer,
    error,
    isPending,
    fetchOneOffer,
  } = useFetch(url);
  const history = useHistory();
  const handleGoBackButton = () => {
    history.go(-1);
  }
  useEffect(() => {
    fetchOneOffer(); 
  });

  return (
    <div className="offer-details">
      {isPending && <div>Loading...</div>}
      {error && <div><h4>An error occured</h4><p>{error.message}</p></div>}
      {offer && <h3> Offer found with given ID: </h3>}
      {offer && printOffer(offer)}
      <div className="inner"><button className="goBackButton" onClick={handleGoBackButton}>Go back</button></div>
    </div>
  )
    
};

export default OfferDetails;
