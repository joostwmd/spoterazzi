export const popup = []

export const hideAllMarkers = () => {
    for (let marker of document.getElementsByClassName('spotMarker')){
        marker.style.visibility = 'hidden'
    }
}

export const showAllMarkers = () => {
    for (let marker of document.getElementsByClassName('spotMarker')){
        marker.style.visibility = 'visible'
    }
}


export const hideHomeButton = () => {
    document.getElementsByClassName('homeButton')[0].style.visibility = "hidden"
}

export const showHomeButton = () => {
    document.getElementsByClassName('homeButton')[0].style.visibility = "visible"
}


export const hideAddSpotButton = () => {
    document.getElementsByClassName('addSpotButton')[0].style.visibility = "hidden"
}

export const showAddSpotButton = () => {
    document.getElementsByClassName('addSpotButton')[0].style.visibility = 'visible'
}


export const hideConfirmLocationButton = () => {
    document.getElementsByClassName('confirmLocation')[0].style.visibility = 'hidden'
}

export const showConfirmLocationButton = () => {
    document.getElementsByClassName('confirmLocation')[0].style.visibility = 'visible'

}


export const hideExplanationField = () => {
    document.getElementsByClassName('explanationField')[0].style.visibility = 'hidden'
}

export const showExplanationField = () => {
    document.getElementsByClassName('explanationField')[0].style.visibility = 'visible'

}


export const hideDragMarker = () => {
    document.getElementsByClassName('dragMarker')[0].style.visibility = 'hidden'
}

export const showDragMarker = () => {
    document.getElementsByClassName('dragMarker')[0].style.visibility = 'visible'
}



export const removePopup = (popup) => {
    if (popup !== null) {
        for (var i = popup.length - 1; i >= 0; i--) {
            popup[i].remove();
        }
    }
}