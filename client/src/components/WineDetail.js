import  { useParams, useHistory } from 'react-router-dom'
import {useEffect, useState} from 'react'
// import styled from 'styled-components'

function WineDetail({deleteWine}) {
  const [wine, setWine] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  
//   const params = useParams()
  const { id } = useParams()
  const history = useHistory()
  useEffect(()=>{
    //GET to '/wines/:id'
    fetch(`/wines/${id}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setWine(data)
          setLoading(false)
        })
      } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])

  function handleDelete(){
    //DELETE to `/wines/${params.id}`
    fetch(`/wines/${id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deleteWine(id)
        history.push('/')
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
}
  

//   const handleBuy = () => {
//     fetch(`/tickets`,{
//       method:'POST',
//       headers: {'Content-Type': 'application/json'},
//       body:JSON.stringify({production_id:id, user_id:1, price:30.50})
//     })
//     .then(res => {
//       if(res.ok){
//         history.push('/users/1')
//       } else {
//         res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//       }
//     })
//   }
  
  
  if(loading) return <h1>Loading</h1>
  if(errors) return <h1>{errors}</h1>

    const { product_information, brand, wine_type, style, abv, taste, body } = wine
   
    return (
        <div>
            <p>{product_information}</p>
            <p>{brand}</p>
            <p>{wine_type}</p>
            <p>{style}</p>
            <p>{abv} %</p>
            <p>{taste}</p>
            <p>{body}</p>
            {/* <button onClick={handleDelete}>Delete Wine</button> */}
            <button id="deletebutton" className="emoji-button delete" onClick={handleDelete}>Delete Wine</button>
        </div>
    )

    }

  
  export default WineDetail
  




// =>not working colorado ready:
// import React, { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom"
// // import CommentForm from "./CommentForm";
// // import ContentList from "./ContentList"
// // import PlaceMap from './PlaceMap'

// function WineDetail({ deleteWine }) {

//     const [wine, setWine] = useState(null)
//     // const [placeContents, setPlaceContents] = useState([])
//     const { id } = useParams()
//     // const history = useHistory()

//     // const handleDeleteContent = (id) => {
//     //     const updatedContent = placeContents.filter((content) => content.id !== id);
//     //     setPlaceContents(updatedContent)
//     // }

//     // const handleNewContent = (newContent) => {
//     //     setPlaceContents((placeContents) => [...placeContents, newContent])
//     // }

//     // const handleEditContent = (updatedContent) => {
//     //     setPlaceContents(placeContents => placeContents.map(oldContent => {
//     //         if (oldContent.id === updatedContent.id) {
//     //             return updatedContent;
//     //         } else {
//     //             return oldContent;
//     //         }
//     //     }))
//     // }

//     useEffect(() => {
//         fetch(`/wines/${id}`)
//             .then((r) => r.json())
//             .then((wine) => {
//                 setWine(wine);
//                 // console.log(wine)
//             });
//     }, [id]);

//     if (!wine) return <h1>"Oops! There's nothing here ¯\_(ツ)_/¯"</h1>;

//     // const { product_information, brand, wine_type, style, abv, taste, body } = wine


//     const handleDelete = () => {
//         fetch(`/wines/${id}`, {
//             method: 'DELETE',
//         })
//         deleteWine()
//         // navigate('/');
//         window.location.reload();
//     }
//     const { product_information, brand, wine_type, style, abv, taste, body } = wine
//     return (
//         <div>
//             <p>{product_information}</p>
//             <p>{brand}</p>
//             <p>{wine_type}</p>
//             <p>{style}</p>
//             <p>{abv} %</p>
//             <p>{taste}</p>
//             <p>{body}</p>
//             <button id="deletebutton" className="emoji-button delete" onClick={handleDelete}>Delete Wine</button>
//         </div>
//     )
// }

// export default WineDetail





// // // =>no delete
// // // import { Link } from 'react-router-dom'
// // import React from "react";
// //     // const id = wine.id
// //     const { product_information, brand, wine_type, style, abv, taste, body } = wine
// //     return (
// //         <div>
// //             {/* <Link to={`/wines/${id}`}> <h2>{name}</h2></Link> */}
// //             {/* <div> */}
// //                 <p>{product_information}</p>
// //                 <p>{brand}</p>
// //                 <p>{wine_type}</p>
// //                 <p>{style}</p>
// //                 <p>{abv} %</p>
// //                 <p>{taste}</p>
// //                 <p>{body}</p>
// //                 <p>{ }</p>
// //             {/* </div> */}
// //             {/* <button><Link to={`/wines/${id}/edit`}>Edit Production</Link></button> */}
// //             {/* <button onClick={handleDelete}>Delete Production</button> */}
// //             {/* <button onClick={handleBuy} >Buy Ticket</button> */}
// //         </div>
// //     )


// // export default WineDetail