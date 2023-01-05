import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Home from './components/Home'
import WineForm from './components/WineForm'
import Navigation from './components/Navigation'
import NotFound from './components/NotFound'
import UserPage from './components/UserPage'
import Login from './components/Login'
import Signup from './components/Signup'
import AboutUs from './components/AboutUs'
import AdminPage from './components/AdminPage'


function App() {
  const [wines, setWines] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  // GET '/wines'
useEffect(() => {
  fetchWines()
}, [])

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

console.log (currentUser)

  const addWine = (wine) => setWines(current => [...current, wine])

  const updateUser = (user) => setCurrentUser(user)

  if (errors) return <h1>{errors}</h1>

  return (
    <>
      <GlobalStyle />
      <Image />
      <Navigation updateUser={updateUser} />
      {/* {!currentUser ? <Login error={'please login'} updateUser={updateUser} /> : */}
      <Switch>

        <Route exact path='/'>
          <Home wines={wines} />
        </Route>

        <Route exact path='/wines/new'>
          <WineForm addWine={addWine} />
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
        <Route path='/signup'>
          <Signup updateUser={updateUser} />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
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


const Image = styled.img.attrs(() => ({
  src: '../img/backgraund.png',
}))`
    position: absolute;
    z-index:-1;
  `