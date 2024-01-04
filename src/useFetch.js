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
    console.log("Fetching: " + url)
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
      .catch((error) => {
        console.log(error);
          if(error.response){
            const data = error.response
            let message = "HTTP " + data.status;
            if(data.message) message = message + " : " + data.message
            setError(message)
          }else{
            console.log("err")
            setError(error.message)
          }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, fetch};
}

export default useFetch;