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
      <form onSubmit={handleSubmit}>
        <label>Company name:</label>
        <input 
          type="text" 
          required 
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label>Position:</label>
        <input 
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <label>Salary:</label>
        <input 
            required
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
        />
        <label>Offer URL:</label>
        <input 
            required
            value={offerUrl}
            onChange={(e) => setOfferUrl(e.target.value)}
        />

        <button>Add offer</button>
        
      </form>
      <button onClick={handleGoHomeButton}>Go home</button>
      {added && <h2>Offer added!</h2>}
    </div>
  );
}
 
export default Create;