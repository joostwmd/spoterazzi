import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

// import { citysToFeatures, loadCityMarker, handleZoomCityMarkers } from '../mapboxApi/cityMarkerLayer'
// import { loadSpotMarkers } from '../mapboxApi/spotMarkerLayer';
// import { createHomeButton } from '../mapboxApi/homeButton'
// import { createAddSpotButton } from '../mapboxApi/addSpotButton';
// import { createCloseConnectionsButton } from '../mapboxApi/artistConnectionsLayer'
// import { getHomeButtonCoordinates, getAddSpotButtonCoordinates } from '../mapboxApi/general'
// import { lendsData } from '../assets/data';
// import { createFilterMenuButton } from '../mapboxApi/filterMenuPopup'

import { spotsData } from '../assets/data';

import {createAddSpotButton, createConfirmLocationButton, createDraggalbeMarker, createExplanationField, createHomeButton} from '../mapboxApi/buttons'
import {getBottomMiddleCoordinates, getCenterCoordinates, getTopLeftCoordinates, getTopMiddleCoordinates, getTopRightCoordinates} from '../mapboxApi/coordinates'
import { loadSpotMarkers } from '../mapboxApi/spot' 


function Map () {
    //map props
    const MAPBOX_TOKEN = "pk.eyJ1Ijoiam9vc3R3bWQiLCJhIjoiY2t1NDQ3NmJqMXRwbzJwcGM5a3FuY3B3dCJ9.yyon_mO5Y9sI1WgD-XFDRQ"
    mapboxgl.accessToken = MAPBOX_TOKEN
    const mapContainer = useRef(null);
    const map = useRef(null);

    const center = [10.172946185256103, 50.70767729701806]
    const bounds = [
        [12.25, 51.75],
        [14.75, 53.25]
    ]



    const createMap = (mapContainer) => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/joostwmd/ckvwibp4725yf15n69t2m3psx',
            center: center,
            zoom: 4.2,
            minZoom: 4,
            maxBounds: bounds,
            attributionControl: false,
        })
        return map.current
    }

    useEffect(() => {
        map.current = createMap(mapContainer)
        map.current.dragRotate.disable()
        map.current.touchZoomRotate.disableRotation()


        map.current.on('load', () => {
            loadSpotMarkers(map.current, spotsData)
        })

        createDraggalbeMarker(map.current, getCenterCoordinates(map.current))
        const homeButton = createHomeButton(map.current, getTopLeftCoordinates(map.current))
        const addSpotButton = createAddSpotButton(map.current, getTopRightCoordinates(map.current))
        const confirmLocationButton = createConfirmLocationButton(map.current, getBottomMiddleCoordinates(map.current))
        const explanationField = createExplanationField(map.current, getTopMiddleCoordinates(map.current))
        
        map.current.on('zoom', () => {
            homeButton.setLngLat(getTopLeftCoordinates(map.current))
            addSpotButton.setLngLat(getTopRightCoordinates(map.current))
            confirmLocationButton.setLngLat(getBottomMiddleCoordinates(map.current))
            explanationField.setLngLat(getTopMiddleCoordinates(map.current))
        })

        map.current.on('move', () => {
            homeButton.setLngLat(getTopLeftCoordinates(map.current))
            addSpotButton.setLngLat(getTopRightCoordinates(map.current))
            confirmLocationButton.setLngLat(getBottomMiddleCoordinates(map.current))
            explanationField.setLngLat(getTopMiddleCoordinates(map.current))
        })
    })

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )

}
export default Map