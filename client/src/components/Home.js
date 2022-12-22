import styled from 'styled-components'
import WineContainer from './WineContainer'
import { useEffect, useState } from "react"


function Home({ wines }) {
  // const [recentWine, setRecentWine] = useState([]);

  // useEffect(() => {
  //   fetch("/wines")
  //     .then((r) => r.json())
  //     .then((recentWine) => {
  //       setRecentWine(recentWine);
  //     });
  // }, []);
  return (
    <div>
      <Image />
      <WineContainer wines={wines} />
    </div>
  )
}

export default Home

const Image = styled.img.attrs(() => ({
  src: '../img/backgraund.png',
}))`
    position: absolute;
    z-index:-1;
  `
