import { useState } from "react";
import OfferList from "./OfferList";

const Home = () => {
  const [offers, setOffers] = useState([]);

  
  const handleGetOffers = (offers) => {
    
    //fetch should be here

    const newOffers = [{
      "id": "6557bf7cbbd1675380a0845c",
      "companyName": "BlueSoft Sp. z o.o.",
      "position": "Junior Java Developer",
      "salary": "7 000 – 9 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-java-developer-bluesoft-remote-hfuanrre"
  },
  {
      "id": "6557bf7cbbd1675380a0845d",
      "companyName": "Efigence SA",
      "position": "Java (CMS) Developer",
      "salary": "16 000 – 18 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/java-cms-developer-efigence-warszawa-b4qs8loh"
  },
  {
      "id": "6557bf7cbbd1675380a0845e",
      "companyName": "Sollers Consulting",
      "position": "Junior Java Developer",
      "salary": "7 500 – 11 500 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-java-developer-sollers-consulting-warszawa-s6et1ucc"
  },
  {
      "id": "6557bf7cbbd1675380a0845f",
      "companyName": "Vertabelo S.A.",
      "position": "Junior Full Stack Developer",
      "salary": "7 000 – 9 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-full-stack-developer-vertabelo-remote-k7m9xpnm"
  },
  {
      "id": "6557bf7cbbd1675380a08460",
      "companyName": "NIX Tech Kft.",
      "position": "Junior Java Developer",
      "salary": "6 169 – 12 339 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-java-developer-nix-tech-kft-budapest-d1wuebdj"
  },
  {
      "id": "6557bf7cbbd1675380a08461",
      "companyName": "BNY Mellon",
      "position": "2023 Technology Program BNY Mellon",
      "salary": "5 833 – 7 500 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/2023-technology-program-bny-mellon-bny-mellon-remote-ezutwncf"
  },
  {
      "id": "6557bf7cbbd1675380a08462",
      "companyName": "Broadridge",
      "position": "Junior Java Full Stack Developer",
      "salary": "9 000 – 11 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-java-full-stack-developer-broadridge-gdansk-af8ukogy"
  },
  {
      "id": "6557bf7cbbd1675380a08463",
      "companyName": "General Index",
      "position": "Junior Backend Java Developer",
      "salary": "10 000 – 13 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-backend-java-developer-general-index-krakow-aigi5u1x"
  },
  {
      "id": "6557bf7cbbd1675380a08464",
      "companyName": "RTB House",
      "position": "Junior Distributed Systems Engineer",
      "salary": "16 800 – 23 520 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-distributed-systems-engineer-rtb-house-remote-aspnshfs"
  },
  {
      "id": "6557bf7cbbd1675380a08465",
      "companyName": "BrainSHARE IT",
      "position": "Java Developer + Angular (Junior)",
      "salary": "10 000 – 12 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/java-developer-angular-junior-brainshare-it-krakow-xy99e3bw"
  },
  {
      "id": "6557bf7cbbd1675380a08466",
      "companyName": "IT Touch",
      "position": "Junior Fullstack Java Developer",
      "salary": "6 000 – 10 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-fullstack-java-developer-it-touch-warsaw-s0mmqz1y"
  },
  {
      "id": "6557bf7cbbd1675380a08467",
      "companyName": "Centrum Percall Polska sp. z o.o.",
      "position": "Remote Java Developer with PLM knowledge",
      "salary": "8 000 – 14 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/remote-java-developer-with-plm-knowledge-centrum-percall-polska-uy1nl7s3"
  },
  {
      "id": "6557bf7cbbd1675380a08468",
      "companyName": "Convista Poland",
      "position": "Junior Java Developer",
      "salary": "6 600 – 11 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-java-developer-convista-poland-wroclaw-akfbyrfk"
  },
  {
      "id": "6557bf7cbbd1675380a08469",
      "companyName": "Reply Polska",
      "position": "Junior Java Developer (IoT)",
      "salary": "5 000 – 9 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-java-developer-iot-reply-polska-katowice-8xk1hg4x"
  },
  {
      "id": "6557bf7cbbd1675380a0846a",
      "companyName": "Reply Polska",
      "position": "Junior Developer IoT",
      "salary": "5 000 – 9 000 PLN",
      "offerUrl": "https://nofluffjobs.com/pl/job/junior-developer-iot-reply-polska-katowice-d7otdoqu"
  }]

  setOffers(newOffers);

  };

  return (
    <div className="home">
      <div className="titles">
        <h1>JOB OFFERS</h1>
        <h2>Explore new job offers.</h2>
      </div>
      <div className="buttons">
        <button className="button1">Search offer by ID</button>
        <button onClick={() => handleGetOffers(offers)} className="button2">
          Get offers
        </button>
        <button className="button1">Insert new offer</button>
      </div>
      <OfferList offers={offers} />
    </div>
  );
};

export default Home;

// onClick={(offers)=>handleClick(offers)}


//trash

// fetch("http://localhost:8080/offers", {
    //   method: "get",
    //   headers: new Headers({
    //     Authorization: "Bearer " + token,
    //     "Content-Type": "application/json",
    //   }),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    //   fetch('http://ec2-3-120-147-150.eu-central-1.compute.amazonaws.com:5057/offers', {
    //     method: "get",
    //     // headers: {Authorization: 'Barer ' + token},
    //     "Content-Type": "application/json",
    // })
    //   .then(resp => resp.json())
    //   .then(json => console.log(JSON.stringify(json)))
    // setOffers(newOffers);
    // try {
    //   const response = axios.get('http://localhost:8080/offers');
    //   ticket = response.data;
    //   navigate('/ticket');
    // } catch (error) {
    //   if (error) setPostRequestError(true);
    //   else setPostRequestError(false);
    // }
  //   axios.get('http://localhost:8080/offers', {
  //   headers: {
  //     'Authorization': 'Bearer ' + token
  //   }
  //   })
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })

  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrdWJhIiwiaXNzIjoiam9iLW9mZmVycy1iYWNrZW5kIiwiZXhwIjoxNzAyNzQxNjE1LCJpYXQiOjE3MDAxNDk2MTV9.3lMZV9SGomoTjnF6i9sqTpdpOblKe_iAujC26HiaZ0E";
