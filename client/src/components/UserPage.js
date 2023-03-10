import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserPage(){
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    
    const params = useParams()
    const {id} = params
    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    setLoading(false)
                })
            } else {
                res.json().then(data => setErrors(data.error))
            }
        })
       
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <div>
            <h1>{user.username}</h1>
            <h3>Orders</h3>
            <ul>

            </ul>
        </div>
    )
}

export default UserPage


// {user.orders.map(order => (
//     <li>
//         <h2>{order.production.title}</h2>
//         {/* <p>Price: {order.price}</p> */}
//     </li>
//     ))}