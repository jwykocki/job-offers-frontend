import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function useFetch(url) {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

 
  const [authToken, ] = useState(sessionStorage.getItem("AccessToken"));
  const fetch = () => {
    if(!authToken){
      history.push('/login')
      return;
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
    if(!authToken){
      history.push('/login')
      return;
    }
    setLoading(true);
    const headers = {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    };
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