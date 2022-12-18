import styled from 'styled-components'
import WineCard from './WineCard'


function WineContainer({wines}) {

    return (
     <div>
         <Title><span>F</span>latIron Theater <span>C</span>ompany</Title>
         <CardContainer>
             {wines.map(wine => <WineCard key={wine.id} wine={wine} />)}
         </CardContainer>
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


const CardContainer = styled.ul`
    display:flex;
    flex-direction:column;
`