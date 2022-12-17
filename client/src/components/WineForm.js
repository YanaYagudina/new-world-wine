import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

function WineForm({ addWine }) {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    price: '',
    product_information: '',
    brand: '',
    country: '',
    region: '',
    appelation: '',
    wine_type: '',
    varietal: '',
    style: '',
    abv: '',
    taste: '',
    body: '',
    image: ''

  })
  const [errors, setErrors] = useState([])
  const history = useHistory()


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function onSubmit(e) {
    e.preventDefault()
    // // POST '/wines'
    fetch('/wines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, ongoing: true })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(console.log)
        } else {
          res.json().then(data => {
            console.log('Error: ', Object.entries(data.errors).map(e => `${e[0]}: ${e[1]}`))
            //data -> {errors:{}} -> Object.entries(data.errors) -> [[title,['can't be blank']]]
            // .map(e => e[0] : e[1]) -> ['title: can't be blank']
            setErrors(Object.entries(data.errors).map(e => `${e[0]}: ${e[1]}`))
          })
        }
      })
  }

  return (
    <div className='App'>
      {errors ? errors.map(e => <div>{e}</div>) : null}
      <Form onSubmit={onSubmit}>
        <label>Name </label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} />

        <label>Brand</label>
        <input type='text' name='brand' value={formData.brand} onChange={handleChange} />

        <label>Year</label>
        <input type='number' name='year' value={formData.year} onChange={handleChange} />

        <label>Price</label>
        <input type='number' name='price' value={formData.price} onChange={handleChange} />

        <label> Description </label>
        <input type='text' rows='4' cols='50' name='product_information' value={formData.product_information} onChange={handleChange} />

        <label>Country</label>
        <textarea type='text' name='country' value={formData.country} onChange={handleChange} />
        
        <label>Region</label>
        <textarea type='text' name='region' value={formData.region} onChange={handleChange} />

        <label>Appelation</label>
        <textarea type='text' name='appelation' value={formData.appelation} onChange={handleChange} />

        <label>Wine Type</label>
        <textarea type='text' name='wine_type' value={formData.wine_type} onChange={handleChange} />

        <label>Varietal</label>
        <textarea type='text' name='varietal' value={formData.varietal} onChange={handleChange} />

        <label>Style</label>
        <textarea type='text' name='style' value={formData.style} onChange={handleChange} />

        <label>Taste</label>
        <textarea type='text' name='taste' value={formData.taste} onChange={handleChange} />

        <label>Body</label>
        <textarea type='text' name='body' value={formData.body} onChange={handleChange} />

        <label>ABV</label>
        <input type='number' name='abv' value={formData.abv} onChange={handleChange} />

        <label>Image</label>
        <input type='text' name='image' value={formData.image} onChange={handleChange} />

        <input type='submit' value='Add Wine' />
      </Form>
    </div>
  )
}

export default WineForm

const Form = styled.form`
    display:flex;
    flex-direction:column;
    width: 400px;
    margin:auto;
    font-family:Arial;
    font-size:30px;
    input[type=submit]{
      background-color:#42ddf5;
      color: white;
      height:40px;
      font-family:Arial;
      font-size:30px;
      margin-top:10px;
      margin-bottom:10px;
    }
  `