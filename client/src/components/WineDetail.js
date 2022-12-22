import { Link } from 'react-router-dom'
import React from "react";


function WineDetail({ wine }) {
    
    const id = wine.id
    const name = wine.brand
    return (
    <div>
         <Link to={`/wines/${id}`}> <h2>{name}</h2></Link>
         <h2>{name}</h2>
     
        <p>backsidd</p>
        </div>
    )
}

export default  WineDetail