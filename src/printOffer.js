const printOffer = (offer) => {
    return ( 
        <div>
            <h4>Position: {offer.position}</h4>
            <h4>Company: {offer.companyName}</h4>
            <h4>Salary: {offer.salary}</h4>
            <h4>URL: {offer.offerUrl}</h4>
            <h4>ID: {offer.id}</h4>
            <br/>
    </div> );
}
 
export default printOffer;