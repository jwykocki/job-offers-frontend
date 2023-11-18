import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import printOffer from "./printOffer";
import { useEffect } from "react";

const OfferDetails = () => {
  const { id } = useParams();

  const {
    data: offer,
    error,
    isPending,
    fetchOneOffer,
  } = useFetch("http://localhost:8000/offers/" + id);
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
      <div><button onClick={handleGoBackButton}>Go back</button></div>
    </div>
  )
    
};

export default OfferDetails;
