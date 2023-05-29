import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';





const Home = () => {
  const [ülkeler, setUlkeler] = useState([]);
  const navigate=useNavigate()

  const url = ("https://restcountries.com/v3.1/all");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUlkeler(data))
      .catch((err) => console.log(err));
  }, []);
 

  // ! 1- ) yukarıdaki url den (api den),  fetch ile DATA  çekilip bir diziye atılmalı (useEffect unutmayın) ve  dizide dönerek card lara bastırılmalı.
  //! 2-)sonra jsx alanındaki button a onclick yapıldığında tıklanan ülkenin name.common u alınarak navigate ile details sayfasına yol verilmeli, o yol App.js de, buradan gelen name ile Details sayfasına gitmeli

  return (
    <div className="container">
    <div className="row">
      {ülkeler.map(({name,flags,capital,region,languages},i) => {
        return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-2" key={i} style={{ width: "18rem" , height: "28rem", margin:"2rem", textAlign:"center"}}>
              <img
              style={{ width: "18rem" , height: "18rem", border:"solid 0.1rem black"}}
                src={`${flags.png}`}
                alt=""
           onClick={()=>navigate(`/countries/${name.common}`)}
              />
              <h3>{name.common}</h3>
              <h5>Capital : {capital}</h5>
              <h5>Region : {region}</h5>
              <h5>Languages : {languages ? Object.values(languages)[0] + "": ""}</h5>

            </div>
        );
      })}
    </div>
    </div>
  );
}

export default Home