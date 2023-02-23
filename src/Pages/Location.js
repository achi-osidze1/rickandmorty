import React, { useEffect, useState } from 'react'
import Locationbackground from '../components/locationbackground/locationbackground'
import Card from "../components/card/Card";
import Episodefilter from '../components/episodefilter/Episodefilter';

const Location = () => {
    let [results, setResults] = React.useState([]);
    let [info, setInfo] = useState([]);
    let {name, type, dimension } = info;
    let [id, setID] = useState(1);
  
    let api = `https://rickandmortyapi.com/api/location/${id}`;
  
    useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        setInfo(data);

        let a = await Promise.all(
          data.residents.map((x) => {
            return fetch(x).then((res) => res.json())
          })
        );
        setResults(a)
      })();
    }, [api]);
  
    return (
            <><Locationbackground />
            <div className='location-container'>
              <h1 className='text-center mt-5 text-white'>Pick Location</h1>
              <Episodefilter setID={setID} name="Location" total={126}/>
                <div className='row mt-4'>
                    <h1 className='text-center text-white'>Location:{" "}<span className='text-primary'> {name === " " ? "Unknown" : name}</span></h1>
                    <h4 className='text-center my-3 text-white'>Dimension:<span className='text-danger'> {dimension=== " " ? "Unknown" : dimension}</span></h4>
                    <h5 className='text-center my-3 text-white'>Type:<span className='text-success'> {type=== " " ? "Unknown" : type}</span></h5>
                </div>
                <div className='container mt-3'>
                  <Card results={results}/>
                </div>
            </div></>
    );
  };  
  
  export default Location;