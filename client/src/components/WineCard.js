import React, {useState} from "react"
import styled from 'styled-components'
import WineDetail from './WineDetail'
import EditWineForm from "./EditWineForm"
import DeleteForm from "./DeleteForm"
// import WineAddForm from "./WineAddForm"


function WineCard({ wine, handleOrder }) {
  
  // updateWine, editWine, deleteWine, addWine 
  const { name, varietal, year, country, region, appelation, price, image } = wine
//   console.log(wine)

// => show details button
  const [showDetails, setShowDetails] = useState(false)
    function handleClick() {
        setShowDetails((showDetails) => !showDetails);
        // console.log(showDetails)
    }
// => update wine form button
  const [updateWine, setupdateWine] = useState(false)
    function handleClickUpdate() {
        setupdateWine((updateWine) => !updateWine);
        // console.log(updateWine)
      }
// => delete wine button
  const [deleteWine, setDeleteWine] = useState(false)
    function handleClickDelete() {
      setDeleteWine((deleteWine) => !deleteWine);
      // console.log(deleteWine)
    }

  return (
    <li className="card">
        <img src={image} />
        <p>{name}</p>
        <p>{varietal}</p>
        <p>{year}</p>
        <p>{country}</p>
        <p>{region}</p>
        <p>{appelation}</p>
        <p>$ {price}</p>
        
        <button id="button1" className="emoji-button delete" onClick={handleClick}>Show Details</button>
          {showDetails ? <div>{<WineDetail wine={wine}/>} </div> : null}
          <br />
        <button id="button1" className="emoji-button delete" onClick={handleClickUpdate}>Update Wine</button>
          {updateWine ? <div>{<EditWineForm updateWine={wine}/>} </div> : null}
          <br />
          {/* <EditWineForm updateWine={updateWine}/> */}
        <button id="button1" className="emoji-button delete" onClick={handleClickDelete}>Delete Wine</button>
          {deleteWine ? <div>{<DeleteForm deleteWine={wine}/>} </div> : null}
          <br />
          <button onClick={() => handleOrder(wine.id)}>ADD TO CART</button>
  </li>

  )
}

export default WineCard
