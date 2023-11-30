import { useState } from "react";
import { useHistory } from "react-router-dom";
import config from './config.json'

const Create = () => {

  const offersUrl = config.SERVER_URL + config.SERVER_PORT + config.ENDPOINT_OFFERS;
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [offerUrl, setOfferUrl] = useState("");
  const [added, setAdded] = useState(false);
  const history = useHistory();

  const handleGoHomeButton = () => {
    history.push("/");
  };
  const [accessToken, ] = useState(sessionStorage.getItem("AccessToken"));

  const handleSubmit = (e) => {
    if(!accessToken){
      history.push("/login");
      return;
    }
    e.preventDefault();
    const offer = { companyName, position, salary, offerUrl };

    fetch(offersUrl, {
      method: "POST",
      headers: { 
        'Authorization': `Bearer ${accessToken}`,
        "Content-Type": "application/json"
     },
      body: JSON.stringify(offer),
    }).then((res) => {
      console.log(res);
      setAdded(true);
      // TODO 
    });
    setCompanyName("");
    setPosition("");
    setSalary("");
    setOfferUrl("");
  };

  return (
    <div className="create">
      <h2>Add a new job offer</h2>
      <form className="createOfferForm" onSubmit={handleSubmit}>
        <label>Company name: <span className="tab"></span></label>
        <input
          className="createOfferInput"
          type="text"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <br />
        <label>Position: <span className="tab"></span></label>
        <input
          className="createOfferInput"
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <br />
        <label>Salary: <span className="tab"></span></label>
        <input
          className="createOfferInput"
          required
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <label>Offer URL: <span className="tab"></span></label>
        <input
          className="createOfferInput"
          required
          value={offerUrl}
          onChange={(e) => setOfferUrl(e.target.value)}
        />
        <br />

        <div className="inner">
          <button className="blackButton">Add offer</button>
        </div>
      </form>
      <div className="inner">
        <button className="goBackButton" onClick={handleGoHomeButton}>
          Go home
        </button>
      </div>
      {!accessToken && <h3 className="mustLoginMessage">You must login first.</h3>}
      {added && <h2>Offer added!</h2>}
    </div>
  );
};

export default Create;
