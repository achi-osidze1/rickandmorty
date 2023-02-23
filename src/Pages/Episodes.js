import React, { useEffect, useState } from 'react'
import Episodesbackground from '../components/episodesbackground/Episodesbackground';
import '../components/episodesbackground/Episodesbackground.css'
import Card from "../components/card/Card";
import Episodefilter from '../components/episodefilter/Episodefilter';

const Episodes = () => {
    let [results, setResults] = React.useState([]);
    let [info, setInfo] = useState([]);
    let {air_date, name } = info;
    let [id, setID] = useState(1);
  
    let api = `https://rickandmortyapi.com/api/episode/${id}`;
  
    useEffect(() => {
      (async function () {
        let data = await fetch(api).then((res) => res.json());
        setInfo(data);

        let a = await Promise.all(
          data.characters.map((x) => {
            return fetch(x).then((res) => res.json())
          })
        );
        setResults(a)
      })();
    }, [api]);
  
    return (
            <><Episodesbackground />
            <div className='episodes-container'>
              <h1 className='text-center mt-5 text-white'>Pick Episode</h1>
              <Episodefilter setID={setID} name="Episode" total={51}/>
                <div className='row mt-4'>
                    <h1 className='text-center text-white'>Episode:{" "}<span className='text-primary'> {name === " " ? "Unknown" : name}</span></h1>
                    <h4 className='text-center my-3 text-white'>Air Date:<span className='text-danger'> {air_date === " " ? "Unknown" : air_date}</span></h4>
                </div>
                <div className='container mt-3'>
                  <Card results={results}/>
                </div>
            </div></>
    );
  };  
  
  export default Episodes;