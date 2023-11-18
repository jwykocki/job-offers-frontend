import { useState } from "react";
import OfferList from "./OfferList";
import useFetch from "./useFetch";
import fetchData from "./fetchData";

const Home = () => {
  const [offers1, setOffers] = useState(null);

  
  const handleGetOffers = () => {
    
    fetchData('http://localhost:8000/offers')
    // setOffers(offers2);

  };

  return (
    <div className="home">
      <div className="titles">
        <h1>JOB OFFERS</h1>
        <h2>Explore new job offers.</h2>
      </div>
      <div className="buttons">
        <button className="button1">Search offer by ID</button>
        <button onClick={handleGetOffers} className="button2">
          Get offers
        </button>
        <button className="button1">Insert new offer</button>
      </div>
      {offers1 && <OfferList offers={offers1} />}
    </div>
  );
};

export default Home;

// onClick={(offers)=>handleClick(offers)}


//trash

// const url = "http://localhost:8080/offers";
//   const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmcxMjQiLCJpc3MiOiJqb2Itb2ZmZXJzLWJhY2tlbmQiLCJleHAiOjE3MDI4NTEyODAsImlhdCI6MTcwMDI1OTI4MH0.l7l1TX-HbBpfY3ey_1Vms8JhdPw1PZf_nMOTG7qLq78';
//     var headers = {Authorization: 'Bearer ' + token}
    
//     fetch(url, {
//         method : "GET",
//         mode: 'cors',
//         headers: headers
        
//     })
//     .then((response) => {
//       console.log('response: ' + response)
//         if (!response.ok) {
//             throw new Error(response.error)
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
    

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
