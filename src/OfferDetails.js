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
  useEffect(fetchOneOffer, []);


  return (
    <div className="offer-details">
        
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {offer && printOffer(offer)}
    </div>
  );
};

export default OfferDetails;
