import { useState } from "react";
import axios from "axios";

function useFetch(url) {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmcxMjQiLCJpc3MiOiJqb2Itb2ZmZXJzLWJhY2tlbmQiLCJleHAiOjE3MDMxNzQwODEsImlhdCI6MTcwMDU4MjA4MX0.dnRmYaudOCwFBXIOHW0Mv-50aUOBJfGdsqlkJwHMGe0'
  const [token, ] = useState(sessionStorage.getItem("AccessToken"));
  const fetch = () => {
    if(!token){
      console.log("logggggg")
      return <h2>You must be logged in</h2>
    }
    setLoading(true);
    const headers = {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    };
    axios.get(url, {headers: headers }, {
    timeout: 5000 
})
      .then((response) => {
        console.log(response)
        console.log(response.status)
        console.log(response.data)
        setData(response.data)
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchOneOffer = () => {
   
    setLoading(true);
    const headers = {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    };
    console.log("Fetching for " + url);
    axios.get(url, {headers: headers }, {
      timeout: 5000 })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, fetch, fetchOneOffer };
}

export default useFetch;