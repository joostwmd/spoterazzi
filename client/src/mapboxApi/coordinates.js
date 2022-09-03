export const getCenterCoordinates = (currentMap) => {
    let lng = currentMap.getCenter().lng
    let lat = currentMap.getCenter().lat
    console.log(lng, lat)
    return [lng, lat]
}

export const getTopLeftCoordinates = (currentMap) => {
    let lng = currentMap.getBounds()._sw.lng
    let lat = currentMap.getBounds()._ne.lat
    return [lng, lat]
}

export const getTopRightCoordinates = (currentMap) => {
    let lng = currentMap.getBounds()._ne.lng 
    let lat = currentMap.getBounds()._ne.lat
    return [lng, lat]
}

export const getTopMiddleCoordinates = (currentMap) => {
    let lng = currentMap.getCenter().lng
    let lat = currentMap.getBounds()._ne.lat
    return [lng, lat]
}

export const getBottomMiddleCoordinates = (currentMap) => {
    let lng = currentMap.getCenter().lng
    let lat = currentMap.getBounds()._sw.lat
    return [lng, lat]
}