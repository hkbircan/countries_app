import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const navigate=useNavigate();
  const { namee }=useParams();
  const [ulke, setUlke] = useState({});
  
  
  

//! buraya App.js deki path ile geldiğimizde, home dan gelen yoldaki name sayesinde (useParam İLE name i yakalayıp), alttaki adresten, buraya name ile gelen  ülkenin verileri çekilecek, onunla ilgili birkaç özellik ekrana bastırılacak


useEffect(() => {
  fetch(`https://restcountries.com/v3.1/name/${namee}`)
    .then((res) => res.json())
    .then((data) => setUlke(data[0]))
    .catch((err) => console.log(err));
}, [namee]);

console.log(ulke);
return (
  <Container className="text-center mt-4">
  <div className="col-12 col-sm-6 col-md-4 col-lg-2" style={{ width: "18rem" , height: "28rem", margin:"2rem auto", textAlign:"center"}}>
              <img
              style={{ width: "18rem" , height: "18rem", border:"solid 0.1rem black"}}
                src={`${ulke?.flags?.png}`}
                alt=""
              />
              <h3>{ulke?.name?.common}</h3>
              <h5>Capital : {ulke?.capital}</h5>
              <h5>Region : {ulke?.region}</h5>
              <h5>Languages : {ulke.languages ? Object.values(ulke?.languages)[0] + "": ""}</h5>

              <div>
          <button className="btn btn-primary" onClick={()=>navigate(-1)}>GO BACK </button>
          <button className="btn btn-warning" onClick={()=>navigate("/")} >GO HOME</button>
        </div>
            </div>
  </Container>
);
            }

export default Details;