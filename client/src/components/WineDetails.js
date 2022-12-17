import { Link, useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

function WineDetail({ deleteWine }) {
  // const [wine, setWine] = useState({ crew_members: [], performers_and_roles: [] })
  const [errors, setErrors] = useState()

  const params = useParams()
  const history = useHistory()

  console.log(params)

  useEffect(() => {
    //GET to '/wines/:id'
    fetch(`/wines/1000`)
      .then(res => {
        if (res.ok) {
          console.log(res)
          res.json().then(setWine)
        } else {
          res.json().then(data => {
            console.log(data)
            setErrors(data.errors)
          })
        }
      })
  }, [])

  function handleDelete() {
    //DELETE to `/wines/${params.id}`

  }
  if(errors) return <div>{errors}</div>

  const { id, name, year, wine_type, abv, varietal, product_information, taste, body, style } = production
  //Place holder data, will be replaced in the assosiations lecture. 
  // const crew_members = ['Lily-Mai Harding', 'Cathy Luna', 'Tiernan Daugherty', 'Giselle Nava', 'Alister Wallis', 'Aishah Rowland', 'Keiren Bernal', 'Aqsa Parrish', 'Daanyal Laing', 'Hollie Haas']
  return (
    <CardDetail>
      <h1>{title}</h1>
      <div className='wrapper'>
        <div>
          <p>{name}</p>
          <p>{year}</p>
          <h3>Wine Type:</h3>
          <p>{wine_type}</p>
          <h3>ABV:</h3>
          <p>{abv} %</p>
          <h3>Varietal:</h3>
          <p>{varietal}</p>
          <h3>Description:</h3>
          <p>{product_information}</p>
          <h3>Taste:</h3>
          <p>{taste}</p>
          <h3>Body:</h3>
          <p>{body}</p>
          <h3>Style:</h3>
          <p>{style}</p>
          <h2>Crew Memebers</h2>
          {/* <ul>
            {crew_members.map(crew => <li>{crew}</li>)}
          </ul> */}
        </div>
        {/* <img src={image} /> */}
      </div>
      <button><Link to={`/wines/${id}/edit`}>Edit Wine</Link></button>
      <button onClick={handleDelete}>Delete Wine</button>
      <button >Buy Wine</button>
    </CardDetail>
  )
}

export default WineDetail
const CardDetail = styled.li`
    display:flex;
    flex-direction:column;
    justify-content:start;
    font-family:Arial, sans-serif;
    margin:5px;
    h1{
      font-size:60px;
      border-bottom:solid;
      border-color:#42ddf5;
    }
    .wrapper{
      display:flex;
      div{
        margin:10px;
      }
    }
    img{
      width: 300px;
    }
    button{
      background-color:#42ddf5;
      color: white;
      height:40px;
      font-family:Arial;
      font-size:30px;
      margin-top:10px;
    }
  `