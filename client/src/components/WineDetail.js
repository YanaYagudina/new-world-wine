import { Link, useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

function WineDetail({ deleteWine }) {
  const [wine, setWine] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  const params = useParams()
  const history = useHistory()

  console.log(params)

  useEffect(() => {
    //GET to '/wines/:id'
    fetch(`/wines/${params.id}`)
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setWine(data)
            setLoading(false)
          })
        } else {
          console.log('error')
          res.json().then(data => setErrors(data.error))
        }
      })
  }, [])

  

  if (loading) return <h1>Loading</h1>
  if (errors) return <div>{errors}</div>

  const { id, name, year, wine_type, abv, varietal, product_information, taste, body, style, image } = wine

  return (
    <CardDetail>
      <h1>{name}</h1>
      <div className='wrapper'>
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
        <img src={image} alt="" />
      </div>
      <button><Link to={`/wines/${id}/edit`}>Edit Wine</Link></button>
      <button onClick={handleDelete}>Delete Wine</button>
      <button onClick={handleBuy} >your order - ticket</button>
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
