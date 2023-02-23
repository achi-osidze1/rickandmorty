import React from 'react'

const Episodefilter = ({total, name, setID}) => {
  return (
    <div className="container col-md-5 m-auto">
        <select 
        className="form-select mt-2" 
        onChange={(e) => setID(e.target.value)} 
        id={name}
        style={{"color": "white", "backgroundColor": "#24262d", "border": "none"}}
        >
            
            {[...Array(total).keys()].map((x) => {
                return( 
                    <option value={x + 1}>{name} - {x + 1}</option>
                )
            })}
        </select>

        
    </div>
  )
}

export default Episodefilter