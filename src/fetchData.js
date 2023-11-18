import { useState, useEffect } from 'react';

const fetchData = (url) => {
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      console.log(
        'Looks like there was a problem. Status Code: ' + response.status
      );
      return;
    }
    response.json().then(function (data) {
      console.log(data);
    });
  })
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });
}
 
export default fetchData;