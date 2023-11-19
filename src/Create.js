import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [offerUrl, setOfferUrl] = useState("");
  const [added, setAdded] = useState(false);
  const history = useHistory();

  const handleGoHomeButton = () => {
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const offer = { companyName, position, salary, offerUrl };

    fetch("http://localhost:8000/offers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(offer),
    }).then((res) => {
      console.log(res);
      setAdded(true);
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
          <button className="submitIdButton">Add offer</button>
        </div>
      </form>
      <div className="inner">
        <button className="goHomeButton" onClick={handleGoHomeButton}>
          Go home
        </button>
      </div>
      {added && <h2>Offer added!</h2>}
    </div>
  );
};

export default Create;
