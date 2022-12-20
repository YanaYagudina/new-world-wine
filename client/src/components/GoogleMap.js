// import Header from './Header';
// import Footer from './Footer';
// import Map, {Marker, FullscreenControl} from 'react-map-gl';
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';
// import './mapPage.css';
import React, { useEffect, useState } from 'react';
import pnglogo from '../imgGeo/geolocation.png'

export default function MapPage(){
// 39.723561037934786, -105.13286373835427
    const [add, setAdd]= useState([])
    const [selected, setSelected]= useState(null)

    useEffect(() => {
        fetch("/addresses")
         .then(response =>response.json())
         .then((data) => setAdd(data))
    }, []);

    const defaultCenter = {
        lng: -105.132863,
        lat: 39.723561,
    }

    const mapStyles = {
        height: '95vh',
        width: '80%',
        left: "150px",
    }

    const options = {
        disableDefaultUI: true,
        zoomControl: true,
    }
    console.log(selected)
    
    return(
        <div>
            {/* <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/> */}
            <div>
                <div id="mapBoxContainer">
                    <LoadScript id ="map" googleMapsApiKey="AIzaSyCy6h5VPVHVTMi_XqiXtCGgR4B5Aqp1b_g">
                        <GoogleMap 
                            mapContainerStyle={mapStyles}
                            zoom={12}
                            center={defaultCenter}
                            options={options}
                        >
                            {add.map((marker)=> (
                                <Marker 
                                    id="marker"
                                    key={marker.post.title} 
                                    position={{lat: 39.723561037934786,  lng: -105.13286373835427}}
                                    icon={{
                                        url:pnglogo,
                                        scaledSize: new window.google.maps.Size(30,30),
                                        origin: new window.google.maps.Point(0,0),
                                        anchor: new window.google.maps.Point(15,15),
                                    }}
                                />
                            ))}

                            {selected ? (
                            <InfoWindow position={{ lat: 39.723561037934786, lng: -105.13286373835427}} onCloseClick={()=>{setSelected(null)}} >
                                <div>
                                    <h2>Union Business Center</h2>
                                    <h2>Address</h2>
                                    <p>445 Union Blvd, Lakewood, CO 80228</p>
                                    <h2>303 123-45-67 </h2>
                                    <h2>worldwine@gmail.com</h2>
                                </div>
                            </InfoWindow>
                            ) : null}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}