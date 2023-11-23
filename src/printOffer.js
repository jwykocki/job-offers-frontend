const printOffer = (offer) => {
    function handleCopyToClipboard(id, element) {
        console.log(id);
        const textToCopy = id;
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    
        element.classList.add('copied');
    
        setTimeout(() => {
            element.classList.remove('copied');
        }, 2000); // 2000 ms (2 seconds)
    }

    return ( 
        <div className="offer-prev" key={offer.id}>
            <p>
                <b>Position:</b> {offer.position}<br />
                <b>Company:</b> {offer.companyName}<br />
                <b>Salary:</b> {offer.salary}<br />
                <b>URL:</b> {offer.offerUrl}<br />
                <b>ID:</b>  
                <span 
                    className="copy-tooltip" 
                    key={offer.id} 
                    onClick={(e) => {handleCopyToClipboard(offer.id, e.target)}}
                >
                    {offer.id}
                </span>
            </p>
        </div>
    );
}

export default printOffer;
