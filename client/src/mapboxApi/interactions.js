export const disableMapInteractions = (currentMap) => {
    currentMap.boxZoom.disable();
    currentMap.doubleClickZoom.disable();
    currentMap.dragPan.disable();
    currentMap.dragRotate.disable();
    currentMap.keyboard.disable();
    currentMap.scrollZoom.disable();
    currentMap.touchZoomRotate.disable();
}

export const enableMapInteractions = (currentMap) => {
    currentMap.boxZoom.enable();
    currentMap.doubleClickZoom.enable();
    currentMap.dragPan.enable();
    currentMap.dragRotate.enable();
    currentMap.keyboard.enable();
    currentMap.scrollZoom.enable();
    currentMap.touchZoomRotate.enable();
}
