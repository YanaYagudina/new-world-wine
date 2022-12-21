import WineBottle from "./WineBottle";
import { useState } from "react";
import { Link } from "react-router-dom";

const WineCollection = ({
  wine,
  enterBottelEditModeFor,
  onDeleteBottle,
}) => {

  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = wine.filter((bottle) => {
    return bottle.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const wineBottle = searchResults.map((bottle) => {
    return (
    <Link to={`/wine/${bottle.id}`}>
    <WineBottle
      key={bottle.id}
      bottle={bottle}
      enterBottelEditModeFor={enterBottelEditModeFor}
      onDeleteBottle={onDeleteBottle}
    />
    </Link>
  );
});

const handleOnChange = (e) => setSearchQuery(e.target.value)

return (
  <section>
    <h2>Wines</h2>
    <div className="filter">
      <button>All</button>
      <button>France</button>
      <button>Spain</button>
      <button>Italy</button>
      <button>USA</button>
    </div>

    <input type="text" placeholder="Search..." onChange={handleOnChange} />
    <ul className="cards">{wineBottle}</ul>
  </section>
);
};

export default WineCollection;

