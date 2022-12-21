import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import WineForm from './components/WineForm'
import EditWineForm from './components/EditWineForm'
import Navigation from './components/Navigation'
import WineDetail from './components/WineDetail'
import NotFound from './components/NotFound'
import UserPage from './components/UserPage'
import Login from './components/Login'
import AboutUs from './components/AboutUs'
import AdminPage from './components/AdminPage'
import WineContainer from './components/WineContainer'
import WineCard from './components/WineCard'


function App() {
  const [wines, setWines] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)
  //Comment
  useEffect(() => {
    fetch('/authorized_user')
      .then(res => {
        if (res.ok) {
          res.json()
            .then(user => {
              setCurrentUser(user)
            })
        }
      })
  }, [])

  // GET '/wines'
useEffect(() => {
  fetchWines()
}, [currentUser])

  const fetchWines = () => {
    fetch('/wines')
      .then(res => {
        if (res.ok) {
          res.json().then(setWines)
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
  }



  const addWine = (wine) => setWines(current => [...current, wine])

  const updateWine = (updatedWine) => setWines(current => {
    return current.map(wine => {
      if (wine.id === updatedWine.id) {
        return updatedWine
      } else {
        return wine
      }
    })
  })

  const deleteWine = (id) => setWines(current => current.filter(p => p.id !== id))

  const updateUser = (user) => setCurrentUser(user)

  if (errors) return <h1>{errors}</h1>

  return (
    <>
      <GlobalStyle />
      <Navigation updateUser={updateUser} />
      {/* {!currentUser ? <Login error={'please login'} updateUser={updateUser} /> : */}
      <Switch>

      

      <Route exact path='/winecard'>
      <WineCard/>
      </Route>

      <Route exact path='/winecontainer'>
          <WineContainer wines={wines}/>
        </Route>

        <Route exact path='/'>
          <Home wines={wines} />
        </Route>

        <Route exact path='/wines/new'>
          <WineForm addWine={addWine} />
        </Route>

        <Route path='/wines/:id/edit'>
          <EditWineForm updateWine={updateWine} />
        </Route>

        <Route exact path='/wines/:id'>
          <WineDetail deleteWine={deleteWine} />
        </Route>

        <Route exact path='/aboutus'>
          <AboutUs />
        </Route>
        <Route exact path='/navigation'>
          <Navigation />
        </Route>

        <Route exact path='/adminpage'>
          <AdminPage />
        </Route>

        <Route exact path='/users/:id' >
          <UserPage updateUser={updateUser} />
        </Route>


        <Route path='/login'>
          <Login updateUser={updateUser} />
        </Route>

        <Route>
          <NotFound />
        </Route>

  



      </Switch>
      {/* } */}
    </>
  )
}
export default App

const GlobalStyle = createGlobalStyle`
    body{
      background-color: black; 
      color:white;
    }
    `