import { Link } from 'react-router-dom'
import styled from 'styled-components'


function WineCard({ wine }) {
  const { id, name, brand, year, country, region, appelation, price, image } = wine
  console.log(wine)
  return (
    // <Card>
      <div>
        <Link to={`/wines/${id}`}> <h2>{name}</h2></Link>
        <p>{brand}</p>
        <p>{year}</p>
        <p>{country}</p>
        <p>{region}</p>
        <p>{appelation}</p>
        <p>$ {price}</p>
        <img src={image} />
      </div>
      
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