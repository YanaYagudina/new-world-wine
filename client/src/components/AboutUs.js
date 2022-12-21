import React from "react"
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
import MapPage from './MapPage'

function AboutUs() {
    return (
        <div>
            <ul>
        <MapPage/>
        </ul>
        <ul>
        <h1>Address:</h1>
        <h2>Union Business Center
            <p>445 Union Blvd, Lakewood, CO 80228</p>
        </h2>
        <h2>303 123-45-67 </h2>
        <h2>worldwine@gmail.com</h2>
        <h1> Hours:
            <p>Mon: closed</p>
            <p>Tue: 9AM-9PM</p>
            <p>Wed: 9AM-9PM</p>
            <p>Thu: 9AM-9PM</p>
            <p>Fri: 9AM-11PM</p>
            <p>Sat: 9AM-11PM</p>
            <p>Sun: 9AM-11PM</p>
        </h1>
        </ul>
        </div>

    )
}
export default AboutUs