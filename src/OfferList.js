import printOffer from "./printOffer";

const OfferList = ({offers}) => {
    
    return (
        <div className="offer-list">
            {offers.map((offer) => (
                printOffer(offer)
            ))}
        </div>
    );
}
 
export default OfferList;