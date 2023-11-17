const OfferList = ({offers}) => {
    
    return (
        <div className="offer-list">
            {offers.map((offer) => (
                <div className="offer-prev" key={offer.id}>
                    <h4>Position: {offer.position}</h4>
                    <h4>Company: {offer.companyName}</h4>
                    <h4>Salary: {offer.salary}</h4>
                    <h4>URL: {offer.offerUrl}</h4>
                    <h4>ID: {offer.id}</h4>
                    <br/>
                    </div>
            ))}
        </div>
    );
}
 
export default OfferList;