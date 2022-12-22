import React, {useState} from "react"
import styled from 'styled-components'
import WineDetail from './WineDetail'
import EditWineForm from "./EditWineForm"
import DeleteForm from "./DeleteForm"
import WineAddForm from "./WineAddForm"


function WineCard({ wine, updateWine }) {
  
  // updateWine, editWine, deleteWine, addWine 
  const { name, varietal, year, country, region, appelation, price, image } = wine
//   console.log(wine)

// => show deteils button
  const [showDetails, setShowDetails] = useState(false)
    function handleClick() {
        setShowDetails((showDetails) => !showDetails);
        console.log(showDetails)
    }
// => edit wine form button
  const [editWine, setEditWine] = useState(false)
    function handleClickEdit() {
        setEditWine((editWine) => !editWine);
        console.log(editWine)
      }
// => delete wine button
  const [deleteWine, setDeleteWine] = useState(false)
    function handleClickDelete() {
      setDeleteWine((deleteWine) => !deleteWine);
      console.log(deleteWine)
    }

    const [addWine, setAddWine] = useState(false)
    function handleClickAdd() {
      setAddWine((addWine) => !addWine);
      console.log(addWine)
    }
  return (
    // <Card>
      <div>
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
        <button id="button1" className="emoji-button delete" onClick={handleClickEdit}>Edit Wine</button>
          {updateWine ? <div>{<EditWineForm updateWine={updateWine}/>} </div> : null}
          <br />
          {/* <EditWineForm updateWine={updateWine}/> */}
          <button id="button1" className="emoji-button delete" onClick={handleClickDelete}>Delete Wine</button>
          {deleteWine ? <div>{<DeleteForm deleteWine={deleteWine}/>} </div> : null}
          <br />
          {/* <DeleteForm deleteWine={deleteWine}/> */}
          <button id="button1" className="emoji-button delete" onClick={handleClickAdd}>Add Wine</button>
          {addWine ? <div>{<WineAddForm addWine={addWine}/>} </div> : null}
          <br />
          {/* <WineAddForm addWine={addWine}/> */}
          
          {/* <Link to={`/art/${id}`}>See more</Link> */}
        {/* <button onClick={handleBuy} >your order - ticket</button> */}
      </div>
    //   comment - delete
    // </Card>

  )
}

export default WineCard


// const Card = styled.li`
//     display:flex;
//     flex-direction:row;
//     justify-content:start;
//     font-family:Arial, sans-serif;
//     margin:10px;
//     &:hover {
//       transform: scale(1.15);
//       transform-origin: top left;
//     }
//     a{
//       text-decoration:none;
//       color:white;
//     }
//     img{
//       width: 180px;
//       margin-left:20%;
//       mask-image: linear-gradient(to left, rgba(0, 0, 0, .9) 80%, transparent 100%);
//     }
//     position:relative;
//     div{
//     position:absolute;
    
//     }
//   `