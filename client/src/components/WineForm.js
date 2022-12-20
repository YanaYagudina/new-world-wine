import React, { useState } from 'react'

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

    // // POST '/wines'
    const handleSubmit = (e) => {
      e.preventDefault();
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ ...formData, glass: 0 }),
      };

    fetch("http://localhost:4000/wines",)
      .then((resp) => resp.json())
      .then((bottle) => {
        addWine(bottle);
        setFormData({
          id: "",
          image: "",
          name: "",
          brand: "",
          price: "",
          country: "",
          type: "",
          region: "",
          year: "",
          varietal: "",
          taste: "",
          body: "",
          abv: "",
          information: "",
          food: "",
        });
      });
  };
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then(addWine)
  //       } else {
  //         //Display errors
  //         res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
  //       }
  //     })
  // }

  return (
    // <div className='App'>
    //   {errors ? errors.map(e => <div>{e}</div>) : null}
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Wine</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label htmlFor="year">Year</label>
        <select
          name="year"
          id="year"
          onChange={handleChange}
          value={formData.year}
        >
          <option value="">Pick a Year</option>
          <option value="1">2015</option>
          <option value="2">2016</option>
          <option value="3">2017</option>
          <option value="4">2018</option>
          <option value="5">2019</option>
          <option value="6">2020</option>
          <option value="7">2021</option>
          <option value="8">2022</option>
        </select>

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={handleChange}
          value={formData.price}
        />

        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          onChange={handleChange}
          value={formData.brand}
        />

        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          onChange={handleChange}
          value={formData.country}
        >
          <option value="">Pick a Country</option>
          <option value="1">France</option>
          <option value="2">Spain</option>
          <option value="3">Italy</option>
          <option value="4">USA</option>
        </select>


        <label htmlFor="region">Region</label>
        <input
          type="text"
          id="region"
          name="region"
          onChange={handleChange}
          value={formData.region}
        />

        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          onChange={handleChange}
          value={formData.type}
        >
          <option value="">Type of Wine</option>
          <option value="1">Red</option>
          <option value="2">White</option>
          <option value="3">Rose</option>
        </select>

        <label htmlFor="variental">Variental</label>
        <select
          name="variental"
          id="variental"
          onChange={handleChange}
          value={formData.variental}
        >
          <option value="">Pick a variental</option>
          <option value="1">Cabernet Sauvignon</option>
          <option value="2">Syrah</option>
          <option value="3">Grenache</option>
          <option value="4">Sauvignon Blanc</option>
          <option value="5">Pinot Noir</option>
          <option value="6">Chardonnay</option>
        </select>


        <label htmlFor="taste">Taste</label>
        <input
          type="text"
          id="taste"
          name="taste"
          onChange={handleChange}
          value={formData.taste} />

        <label htmlFor="body">Body</label>
        <select
          name="body"
          id="variebodyntal"
          onChange={handleChange}
          value={formData.body}
        >
          <option value="">Pick a body</option>
          <option value="1">Light-bodied</option>
          <option value="2">Medium-bodied</option>
          <option value="3">Full-bodied</option>
        </select>

        <label htmlFor="abv">ABV</label>
        <input
          type="number"
          id="abv"
          name="abv"
          onChange={handleChange}
          value={formData.abv}
        />

        <label htmlFor="information">Information</label>
        <textarea id="information" name="information"
          onChange={handleChange}
          value={formData.information} />

        <label htmlFor="food">Food</label>
        <input
          type="number"
          id="food"
          name="food"
          onChange={handleChange}
          value={formData.food} />

        {/* <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" /> */}
        
        <label htmlFor="link">Wine Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          onChange={handleChange}
          value={formData.link}
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.image} />

        <button type="submit">Add Wine</button>
      </form>
    </section>
  );
};
  //     {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
  //   </div>
  // )
// }

export default WineForm

