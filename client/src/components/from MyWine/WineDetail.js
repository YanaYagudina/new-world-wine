import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WineDetail = () => {
  const [glass, setGlass] = useState(0);
  const [bottle, setBottle] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { bottleId } = useParams();

  useEffect(() => {
    fetch(`/wines/${bottleId}`)
      .then((r) => r.json())
      .then((bottle) => {
        setBottle(bottle);
        setIsLoaded(true);
      });
  }, [bottleId]);

  if (!isLoaded) return <h2>Loading...</h2>;

  const { id, image, name, brand, price, country, type, region, year, variental, taste, body, abv, information, food } = bottle;

  function handleGlassClick() {
    setGlass((glass) => glass + 1);
  }

  return (
    <section>
      <div className="bottle-detail box">
        <div className="bottle-image">
          <img src={image} alt={name} />
          <button className="glass" onClick={handleGlassClick}>
            🍷{glass}
          </button>
        </div>
        <div className="details">
          <h2>{name}</h2>
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
          {/* {link ? (
            <p>
              <a target="_blank" rel="noreferrer" href={link}>
                Project Homepage
              </a>
            </p>
          ) : null} */}
          <div className="extra">
            <span className="badge blue">Country {country}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineDetail;