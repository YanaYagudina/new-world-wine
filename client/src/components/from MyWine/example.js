import React, { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const WineBottle = ({
  bottle,
  onDeleteBottle,
}) => {
  const { id, image, name, brand, price, country, type, region, year, variental, taste, body, abv, information, food } = bottle;
  const [bottleCount, setBottleCount] = useState(0);
  const handleBottle = (bottleCount) => setBottleCount(bottleCount + 1);

  // TODO: add this to the cart
  //image, name, brand, price, country, type, region, year, variental, taste, body, abv, information, food

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/wine/${id}`, {
      method: "DELETE",
    })
    onDeleteBottle(bottle)
      .then((resp) => console.log(resp))
      .then(onDeleteBottle(bottle));
  };

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />

        <button onClick={handleBottle} className="glass">🍷{bottleCount}</button>
      </figure>
      <section className="details">

        <h4>{name}</h4>
        <h3>{brand}</h3>
        <h4>{year}</h4>
        <h2>{type}</h2>
        <h2>{variental}</h2>
        <h2>{country}</h2>
        <h2>{region}</h2>
        <h2>{abv}</h2>
        <h2>{taste}</h2>
        <h2>{body}</h2>
        <h1>{information}</h1>
        <h2>{food}</h2>
        <h4>{price}</h4>

        {/* <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null} */}

      </section>

      <footer className="extra">
        <span className="badge blue">Country {country}</span>
        <div className="manage">
          <Link to={`/wine/${id}/edit`} className="button">
            <FaPencilAlt />
          </Link>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default WineBottle;