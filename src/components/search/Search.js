import React from 'react'

const Search = ({setSearch}) => {
  return (
    <div className="container col-md-5 m-auto mt-2 mb-4">
        <input onKeyUp={e=>{
            setSearch(e.target.value)
        }} type="text" id='input' className="form-control mt-2" placeholder="Search Character"/>
    </div>
  )
}

export default Search