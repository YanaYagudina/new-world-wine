import styled from 'styled-components'
import WineCard from './WineCard'
import WineAddForm from "./WineAddForm"
import React, {useState} from "react"


function WineContainer({wines}) {
    console.log(wines)

    const wineCards = wines.map(wine => {
        return (
            <WineCard
                key={wine.id}
                wine={wine}
            />
        )
    })
    // => add wine button
    const [addWine, setAddWine] = useState(false)
    function handleClickAdd() {
      setAddWine((addWine) => !addWine);
      console.log(addWine)
    }
    

    return (
        <div>
            <Title><span>W</span>orld <span>W</span>ine</Title>
            <button id="button1" className="emoji-button delete" onClick={handleClickAdd}>Add Wine</button>
          {addWine ? <div>{<WineAddForm addWine={addWine}/>} </div> : null}
          <br />
            {wineCards}
        
        </div>
    )
  }
  
export default WineContainer

const Title = styled.h1`
    text-transform: uppercase;
    font-family:Arial, sans-serif;
    width:70px;
    font-size: 70px;
    line-height: .8;
   
    transform: scale(.7, 1.4);
    
    span{
        color:#42ddf5;
    }
`


// const CardContainer = styled.ul`
//     display:flex;
//     flex-direction:column;
// `