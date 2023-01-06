import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navigation({updateUser}) {
  const [menu, setMenu] = useState(false)

  let history = useHistory()
  const handleLogOut = () => {
    console.log('in logout')
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        updateUser(false)
        history.push('/')
      }
    })
  }

  return (
    <Nav>
      <NavH1>World Wine</NavH1>
      <Menu>
      <button onClick={handleLogOut}>Log Out</button>
        {!menu ?
          <div onClick={() => setMenu(!menu)}>
            <GiHamburgerMenu size={30} />
          </div> :
          <ul>
            <li onClick={() => setMenu(!menu)}>x</li>
            <li><Link to='/users/1'>User Page</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Sign up!</Link></li>
            <li><Link to='/aboutus'>About Us</Link></li>
            <li><Link to='/order'>My order</Link></li>
            {/* <li><Link to='/wines/new'>New Wine</Link></li>  */}
            <li><Link to='/'> Home</Link></li>
        
          </ul>
        }
      </Menu>

    </Nav>
  )
}

export default Navigation


const NavH1 = styled.h1`
font-family: 'Splash', cursive;
`
const Nav = styled.div`
  display: flex;
  justify-content:space-between;
  
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
    color:white;
    font-family:Arial;
  }
  a:hover{
    color:pink
  }
  ul{
    list-style:none;
  }
  
`;