import WineCard from './WineCard'
import WineAddForm from "./WineAddForm"
import React, { useState } from "react"

// import logo1 from "../imgs/logo1.png"
{/* <img src={logo1} alt="logo" height="100%" width="100px" /> */}

function WineContainer({ wines, handleOrder }) {
    // console.log(wines)
    const [searchQuery, setSearchQuery] = useState("");

    const searchResults = wines.filter((wine) => {
        return wine.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const wineCards = searchResults.map(wine => {
        return (
            <WineCard handleOrder={handleOrder}
                key={wine.id}
                wine={wine}
            />
        )
    })

    const handleOnChange = (e) => setSearchQuery(e.target.value)



    // => add wine button
    const [addWine, setAddWine] = useState(false)
    function handleClickAdd() {
        setAddWine((addWine) => !addWine);
        //   console.log(addWine)
    }

    return (
        <div>
            <ul>
                <button id="button1" className="emoji-button delete" onClick={handleClickAdd}>Add Wine</button>
                {addWine ? <div>{<WineAddForm addWine={addWine} />} </div> : null}
            </ul>
            <br />
            <section>
                <ul className="filter">
                    <button>All</button>
                    <button>France</button>
                    <button>Spain</button>
                    <button>Italy</button>
                    <button>USA</button>
                </ul>
                <ul>
                    <input type="text" placeholder="Search by name..." onChange={handleOnChange} />
                </ul>
            </section>
            <ul className="cards">{wineCards}</ul>

        </div>
    )
}

export default WineContainer
