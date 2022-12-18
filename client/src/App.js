import { Router, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import WineForm from './components/WineForm'
import EditWineForm from './components/EditWineForm'
import Navigation from './components/Navigation'
import WineDetails from './components/WineDetails'
import NotFound from './components/NotFound'
import UserPage from './components/UserPage'
import Login from './components/Login'

function App() {
  const [wines, setWines] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if (res.ok) {
        res.json()
          .then(user => {
            setCurrentUser(user)
            fetchWines()
          })
      }
    }, [])
    // GET '/wines'

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
        {!currentUser ? <login error={'please login'} updateUser={updateUser} /> :
          <Router>

            <Route path='/wines/new' element={<WineForm addWine={addWine} />}/>

            <Route path='/wines/:id/edit' element={<EditWineForm updateWine={updateWine} />}/>

            <Route path='/wines/:id' element={<WineDetails deleteWine={deleteWine} />}/>

            <Route path='/users/:id' element={<UserPage updateUser={updateUser} />}/>

            <Route path='login' element={<Login updateUser={updateUser} />}/>

            <Route path='/' element={<Home wines={wines} />}/>

            <Route element={<NotFound />}/>
          </Router>
        }

      </>
    )
  })
}
export default App

  const GlobalStyle = createGlobalStyle`
    body{
      background-color: black; 
      color:white;
    }
    `