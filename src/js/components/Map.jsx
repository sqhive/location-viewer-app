import React, { Component } from 'react'

import {
  MapBox,
  GoogleMapComponent
} from './'

const Map = (props) => {
  const { match } = props
  return (
    <GoogleMapComponent
      { ...match.params }
      googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAu2SxKB46uHD92Lc2cYI9iPcSPKAJ03ww&v=3.exp&libraries=geometry,drawing,places,visualization'}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<MapBox />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}

export {
  Map
}