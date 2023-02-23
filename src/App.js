import React, { useEffect, useState } from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Card from "./components/card/Card";
import './components/card/Card.css'
import Pagination from "./components/pagination/Pagination";
import './components/pagination/Pagination.css'
import Search from "./components/search/Search";
import './components/search/Search.css'
import Navbar from "./components/navbar/Navbar";
import './components/navbar/Navbar.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import homebackground from './components/images/homebackground.jpg'

function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
    </Router>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1) 
  let [search, setSearch] = useState("")
  let [fetchedData, updateFetchedData] = useState([])
  let {info, results} = fetchedData
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res)=> res.json());
      updateFetchedData(data)
    })();
  },[api]);

  return (
    <div className="App">
      <div className="background">
        <img className="img" src={homebackground} alt=''/>
      </div>
      <div className='text'>
        <h1 className="text-center">Rick And Morty <span className='text-danger'>API</span></h1>
      </div>
      <h1 className="text-center my-4 mt-5 text-white">Rick & Morty <span className="text-primary">Characters</span></h1>
      <Search setSearch = {setSearch}/>
      <div className="container">
        <Card results = {results}/>
      </div>
      <Pagination info={info} pageNumber = {pageNumber} setPageNumber = {setPageNumber}/>
    </div>
  );
}

export default App;