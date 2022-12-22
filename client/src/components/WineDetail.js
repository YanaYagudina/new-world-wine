import React from "react";


function WineDetail({ wine }) {
    
    // const id = wine.id
    const { product_information, brand, wine_type, style, abv, taste, body } = wine
    // :
    return (
    <div>
         {/* <Link to={`/wines/${id}`}> <h2>{name}</h2></Link> */}
         
         <p>{product_information}</p>
         <p>{brand}</p>
         <p>{wine_type}</p>
         <p>{style}</p>
         <p>{abv} %</p>
         <p>{taste}</p>
         <p>{body}</p>
         <p>{}</p>
        </div>
    )
}

export default  WineDetail








  

