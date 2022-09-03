import mapboxgl from "mapbox-gl"

import { getBottomMiddleCoordinates, getCenterCoordinates } from "./coordinates"
import { addSpotHandler, confirmLocationHandler, pickLocationHandler } from './spot'
import { CLIENT_URL } from "../App"
import { ICONS } from "../assets/icons"


export const createAddSpotButton = (currentMap, coordinates) => {
    const addSpotButton = document.createElement('div')
    addSpotButton.className = 'addSpotButton'
    addSpotButton.innerHTML = `<div>${ICONS.plusWhite}</div>`

    addSpotButton.children[0].addEventListener('click', () => {
        pickLocationHandler(currentMap)
        //createDraggalbeMarker(currentMap, getCenterCoordinates(currentMap))
    })
    return new mapboxgl.Marker(addSpotButton).setLngLat(coordinates).addTo(currentMap)
}



export const createConfirmLocationButton = (currentMap, coordinates, popup) => {
    const confirmLocation = document.createElement('div')
    confirmLocation.className = 'confirmLocation'
    confirmLocation.innerHTML = `<div>${ICONS.checkWhite}</div>`
    confirmLocation.style.visibility = 'hidden'
    confirmLocation.children[0].addEventListener('click', () => {
        confirmLocationHandler(currentMap, popup)
    })

    return new mapboxgl.Marker(confirmLocation).setLngLat(coordinates).addTo(currentMap)
}


const redirectToHomepage = () => {
    window.location.href = `${CLIENT_URL}`
}

export const createHomeButton = (currentMap, coords) => {
    const homeButton = document.createElement('div')
    homeButton.className = 'homeButton'
    homeButton.innerHTML = `<div>${ICONS.home}</div>`
    homeButton.addEventListener('click', () => {
        redirectToHomepage()

    })
    return new mapboxgl.Marker(homeButton).setLngLat(coords).addTo(currentMap)
}


export const createExplanationField = (currentMap, coords) => {
    const explanationField = document.createElement('div')
    explanationField.className = 'explanationField'
    explanationField.innerHTML = '<h1>drag the orange circle to the location of your spot then press the green check at the bottom</h1>'
    explanationField.style.visibility = 'hidden'
    return new mapboxgl.Marker(explanationField).setLngLat(coords).addTo(currentMap)
}


export const createDraggalbeMarker = (currentMap, coords) => {
    const dragMarker = document.createElement('div')
    dragMarker.className = 'dragMarker'
    dragMarker.style.visibility = 'hidden'

    const marker = new mapboxgl.Marker(dragMarker, {
        draggable: true
    }).setLngLat(coords).addTo(currentMap)

    return marker
}


