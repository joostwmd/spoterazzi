import { disableMapInteractions, enableMapInteractions } from "./interactions";
import { getCenterCoordinates } from "./coordinates";
import { removePopup, showAllMarkers, hideHomeButton, showHomeButton } from "./visual";
import AddSpot from "../popups/AddSpot";
import { ChakraProvider } from "@chakra-ui/provider";
import ReactDOM from 'react-dom';
import mapboxgl from "mapbox-gl";
//import { showAllMarkers } from "./spotMarkerLayer";
import { hideAllMarkers, popup } from "./visual";
import {
    hideDragMarker,
    showDragMarker,
    hideExplanationField,
    showExplanationField,
    hideConfirmLocationButton,
    showConfirmLocationButton,
    hideAddSpotButton,
    showAddSpotButton,

} from "./visual";
import Spot from "../popups/Spot";



export const pickLocationHandler = (currentMap) => {
    showDragMarker()
    showExplanationField()
    showConfirmLocationButton()
    hideAddSpotButton()
    hideAllMarkers()
}

export const confirmLocationHandler = (currentMap) => {
    hideDragMarker()
    hideHomeButton()
    hideExplanationField()
    hideConfirmLocationButton()
    disableMapInteractions(currentMap)

    const marker = document.createElement('div')
    marker.id = 'addSpotPage'
    popup.push(marker)
    new mapboxgl.Marker(marker).setLngLat(getCenterCoordinates(currentMap)).addTo(currentMap)

    ReactDOM.render(
        <ChakraProvider>
            <AddSpot currentMap={currentMap} popup={popup} />
        </ChakraProvider>
        , document.getElementById('addSpotPage')
    )
}

export const addSpot = (currentMap) => {
    showHomeButton()
    removePopup(popup)
    showAllMarkers()
    showAddSpotButton()
    enableMapInteractions(currentMap)
}


export const createSpotProfilePopup = (currentMap, data) => {
    hideAddSpotButton()
    hideHomeButton()
    hideAllMarkers()
    disableMapInteractions(currentMap)

    const marker = document.createElement('div')
    marker.id = 'spotProfile'
    popup.push(marker)
    new mapboxgl.Marker(marker).setLngLat(getCenterCoordinates(currentMap)).addTo(currentMap)

    ReactDOM.render(
        <ChakraProvider>
            <Spot currentMap={currentMap} popup={popup} data={data}/>
        </ChakraProvider>
        , document.getElementById('spotProfile')
    )
}

export const closeSpotProfilePopup = (currentMap) => {
    showAllMarkers()
    showHomeButton()
    showAddSpotButton()
    removePopup(popup)
    enableMapInteractions(currentMap)
}


export const loadSpotMarkers = (currentMap, data) => {
    
    currentMap.addSource('spots', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': data
        }
    })

    const mapboxMarkerArray = []
    for (let i = 0; i < data.length; i++) {
        const marker = document.createElement('div')
        marker.className = 'spotMarker'

        new mapboxgl.Marker(marker).setLngLat(data[i].geometry.coordinates).addTo(currentMap)
        mapboxMarkerArray.push(new mapboxgl.Marker(marker).setLngLat(data[i].geometry.coordinates).addTo(currentMap))

    }

    const spotMarkers = document.getElementsByClassName('spotMarker')
    for (let i = 0; i < spotMarkers.length; i++) {
        spotMarkers[i].addEventListener('click', () => {
            createSpotProfilePopup(currentMap, data[i])
        })
    }
}


