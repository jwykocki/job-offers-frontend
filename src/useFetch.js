import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
 
  const [accessToken, ] = useState(sessionStorage.getItem("AccessToken"));
  const fetch = () => {
    if(!accessToken){
      history.push('/login')
      return;
    }
    setLoading(true);
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };
    axios.get(url, {headers: headers }, {
    timeout: 5000 
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        setData(response.data)
      })
      .catch((err) => {
        console.log(error);
          if(error.response){
            console.log("yes");
            const data = error.response.data
            setError("HTTP " + data.status + " : " + data.message)
          }else{
            setError(error.message)
          }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchOneOffer = () => {
    if(!accessToken){
      history.push('/login')
      return;
    }
    setLoading(true);
    const headers = {
      'Authorization': `Bearer ${accessToken}`,
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