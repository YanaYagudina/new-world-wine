import WineContainer from './WineContainer'

function Home({ wines, handleOrder }) {
  return (
    <div>
      <WineContainer wines={wines} handleOrder={handleOrder} />
    </div>
  )
}

export default Home

