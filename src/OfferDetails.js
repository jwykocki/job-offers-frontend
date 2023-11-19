import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import printOffer from "./printOffer";
import { useEffect } from "react";

const OfferDetails = () => {
  const { id } = useParams();
  const url = "http://localhost:8000/offers/";

  const {
    data: offer,
    error,
    isPending,
    fetchOneOffer,
  } = useFetch(url + id);
  const history = useHistory();
  const handleGoBackButton = () => {
    history.go(-1);
  }
  useEffect(fetchOneOffer, []);

  return (
    <div className="offer-details">
      {isPending && <div>Loading...</div>}
      {error && <div><h4>An error occured</h4><p>{error.message}</p></div>}
      {offer && printOffer(offer)}
      <div className="inner"><button className="goBackButton" onClick={handleGoBackButton}>Go back</button></div>
    </div>
  )
    
};

export default OfferDetails;
