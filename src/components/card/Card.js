import React from 'react'

const Cards = ({results}) => {
    let display;
 
    if(results){
        display = results.map((x)=>{
            let {id, name, image, location, status,origin, species, gender} = x;
            return(
            <div key={id} className="card">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><span className='text-warning'>{location.name}</span></p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Gender <span className='text-warning'>:</span> {gender}</li>
                    <li className="list-group-item">Species <span className='text-warning'>:</span> {species}</li>
                    <li className="list-group-item">Origin <span className='text-warning'>:</span> {origin.name}</li>
                    <li className="list-group-item">Status <span className='text-warning'>:</span> {status}</li>
                </ul>
                <div className="card-body"></div>
            </div>
            
            )
        })
    }
    else{
        display = "Character Not Found"
    }

    return <>{display}</>
}

export default Cards