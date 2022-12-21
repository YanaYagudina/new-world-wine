import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'

const WineEditForm = ({ onUpdateBottle }) => {
    const [formState, setFormState] = useState({
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
    const { image, name, brand, price, country, type, region, year, variental, taste, body, abv, information, food } = formState;

    const { id } = useParams()
    const history = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:4000/wine/${id}`)
            .then((resp) => resp.json())
            .then((bottle) => setFormState(bottle));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formState),
        };


        fetch(`http://localhost:4000/wine/${id}`, configObj)
            .then((resp) => resp.json())
            .then((updatedBottle) => {
                onUpdateBottle(updatedBottle);
                history.push(`/wine/${id}`)
            });
    };

    return (
        <form onSubmit={handleSubmit} className="form" autoComplete="off">
            <h3> Edit Wine</h3>

            <lable htmlFor="name">Name</lable>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
            />

            <label htmlFor="year">Year</label>
            <select
                name="year"
                id="year"
                onChange={handleChange}
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
            />

            <label htmlFor="brand">Brand</label>
            <input
                type="text"
                id="brand"
                name="brand"
                onChange={handleChange}
            />

            <label htmlFor="country">Country</label>
            <select
                name="country"
                id="country"
                onChange={handleChange}
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
            />

            <label htmlFor="type">Type</label>
            <select
                name="type"
                id="type"
                onChange={handleChange}
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
            />

            <label htmlFor="body">Body</label>
            <select
                name="body"
                id="variebodyntal"
                onChange={handleChange}
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
            />

            <label htmlFor="information">Information</label>
            <textarea
                id="information"
                name="information"
                onChange={handleChange}
            />

            <label htmlFor="food">Food</label>
            <input
                type="number"
                id="food"
                name="food"
                onChange={handleChange}
            />

            {/* <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" /> */}
            {/* <label htmlFor="link">Wine Homepage</label>
            <input
                type="text"
                id="link"
                name="link"
                value={link}
                onChange={handleChange}
            /> */}

            <label htmlFor="image">Image</label>
            <input
                type="text"
                id="image"
                name="image"
                onChange={handleChange}
            />

            <button type="submit">Update Wine</button>
        </form>
    );
};

export default WineEditForm;
