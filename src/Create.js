import { useState } from "react";
import { useHistory } from "react-router-dom";
import config from './config.json'
import axios from "axios";
import printOffer from "./printOffer";

const Create = () => {

  const offersUrl = config.SERVER_URL + config.SERVER_PORT + config.ENDPOINT_OFFERS;
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [offerUrl, setOfferUrl] = useState("");
  const [added, setAdded] = useState(false);
  const history = useHistory();
  const [error, setError] = useState(null);
  const [offer, setOffer] = useState(null);

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
    setAdded(false)
    setError(false)
    axios(offersUrl, {
      method: "POST",
      headers: { 
        'Authorization': `Bearer ${accessToken}`,
        "Content-Type": "application/json"
     },
      data: JSON.stringify(offer),
    }).then((res) => {
      if (res.status !== 201) {
        throw new Error(res.status);
      }
      setAdded(true);
      setOffer(res.data)
    })
    .catch((error) => {
      console.log(error);
        if(error.response){
          const data = error.response
          let message = "HTTP " + data.status;
          if(data.data.messages) message = message + " : " + data.data.messages
          setError(message)
        }else{
          console.log("err")
          setError(error.message)
        }});

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
      {added && <h2>Offer added! </h2>}
      {added && printOffer(offer)}
      {error && <h2>An error occurred: {error}</h2>}
    </div>
  );
};

export default Create;
