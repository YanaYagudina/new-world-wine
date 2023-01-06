// import Header from './Header';
// import Footer from './Footer';
// import Map, {Marker, FullscreenControl} from 'react-map-gl';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import './MapPage.css';
import React, { useEffect, useState } from 'react';
import pnglogo from '../imgGeo/geolocation.png'
// import pnglogo from "./src/imgGeo/geolocation.png"


export default function MapPage() {
    // 39.723561037934786, -105.13286373835427
    const [add, setAdd] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        fetch("/addresses")
            .then(response => response.json())
            .then((data) => setAdd(data))
    }, []);

    const defaultCenter = {
        lng: -105.132863,
        lat: 39.723561,
    }

    const mapStyles = {
        height: '30vh',
        width: '20%',
        left: "10px",
    }

    const options = {
        disableDefaultUI: true,
        zoomControl: true,
    }
    console.log(selected)

    return (
        <div id="mapBoxContainer">
            <LoadScript id="map" googleMapsApiKey="AIzaSyCy6h5VPVHVTMi_XqiXtCGgR4B5Aqp1b_g">
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={12}
                    center={defaultCenter}
                    options={options}
                >
                    <Marker
                        id="marker"
                        // key={marker.post.title} 
                        position={{ lat: 39.723561037934786, lng: -105.13286373835427 }}
                        icon={{
                            url: pnglogo,
                            scaledSize: (30, 30),
                            // origin: (0,0),
                            // anchor: (15,15),
                        }}
                        onClick={() => {
                            setSelected(true);
                        }}
                    />

                    {selected ? (
                        <InfoWindow position={{ lat: 39.723561037934786, lng: -105.13286373835427 }} onCloseClick={() => { setSelected(null) }} >
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

    )
}