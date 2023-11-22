import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [offerUrl, setOfferUrl] = useState('');
  const [added, setAdded] = useState(false);
  const history = useHistory();

  const handleGoHomeButton = () => {
    history.push('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const offer = {companyName, position, salary, offerUrl};

    fetch('http://localhost:8000/offers', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(offer)
    }).then((res) => {
        console.log(res);
        setAdded(true);
       
      
    })
  }

  return (
    <div className="create">
      <h2>Add a new job offer</h2>
      <form className="createOfferForm"onSubmit={handleSubmit}>
        <aside>
        <div className="createFormLeft"><label>Company name:</label></div>
        </aside>
        <aside>
        <div className="createFormRight"><input 
          type="text" 
          required 
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        /></div>
        </aside>
        <div className="createFormLeft"><label>Position:</label></div>
        <div className="createFormRight"><input 
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        /></div>
        <div className="createFormLeft"><label>Salary:</label></div>
        <div className="createFormRight"><input 
            required
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
        /></div>
        <div className="createFormLeft"><label>Offer URL:</label></div>
        <div className="createFormRight"><input 
            required
            value={offerUrl}
            onChange={(e) => setOfferUrl(e.target.value)}
        /></div>

        <div className="inner"><button className="submitIdButton">Add offer</button></div>
        
      </form>
      <div className="inner"><button className="goHomeButton" onClick={handleGoHomeButton}>Go home</button></div>
      {added && <h2>Offer added!</h2>}
    </div>
  );
}
 
export default Create;