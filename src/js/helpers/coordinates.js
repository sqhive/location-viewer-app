export const toCoordinates = (cords) => {
  const { latitude: lat, longitude: lng } = cords
  return new window.google.maps.LatLng(lat, lng)
}