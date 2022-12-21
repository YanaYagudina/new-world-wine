import { Link } from 'react-router-dom'
import React, {useState} from "react";
import styled from 'styled-components'
import WineDetail from './WineDetail'


function WineCard({ wine }) {
  const { id, name, brand, year, country, region, appelation, price, image } = wine
//   console.log(wine)
const [showDetails, setShowDetails] = useState(false)
    
    function handleClick() {
        setShowDetails((showDetails) => !showDetails);
        console.log("clicked")
      }

    //   function handleDelete() {
    //     //DELETE to `/productions/${params.id}`
    //     fetch(`/wines/${params.id}`, {
    //       method: 'DELETE',
    //       headers: { 'Content-Type': 'application/json' }
    //     })
    //       .then(res => {
    //         if (res.ok) {
    //           deleteWine(id)
    //           history.push('/')
    //         } else {
    //           res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
    //         }
    //       })
    //   }
    
    //   const handleBuy = () => {
    //     fetch(`/orders`, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ wine_id: id, user_id: 1, price: 30.50 })
    //     })
    //       .then(res => {
    //         if (res.ok) {
    //           history.push('/users/1')
    //         } else {
    //           res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
    //         }
    //       })
    //   }

      
  return (
    // <Card>
      <div>
        <Link to={`/wines/${id}`}> <h2>{name}</h2></Link>
        <img src={image} />
        <p>{brand}</p>
        <p>{year}</p>
        <p>{country}</p>
        <p>{region}</p>
        <p>{appelation}</p>
        <p>$ {price}</p>
        
        <button id="button1" className="emoji-button delete" onClick={handleClick}>Show Details</button>
          {showDetails ? <div>{<WineDetail/>} </div> : null}
          <br />
          {/* <Link to={`/art/${id}`}>See more</Link> */}
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