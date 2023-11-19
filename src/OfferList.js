const OfferList = ({offers}) => {
    
    return (
        <div className="offer-list">
            {offers.map((offer) => (
                <div className="offer-prev" key={offer.id}>
                    <p><b>Position:</b> {offer.position}<br />
                    <b>Company:</b> {offer.companyName}<br />
                    <b>Salary:</b> {offer.salary}<br />
                    <b>URL:</b> {offer.offerUrl}<br />
                    <b>ID:</b> {offer.id}</p>
                    </div>
            ))}
        </div>
    );
}
 
export default OfferList;