import WineContainer from './WineContainer'

function Home({ wines }) {
  return (
    <div>
      <WineContainer wines={wines} />
    </div>
  )
}

export default Home

