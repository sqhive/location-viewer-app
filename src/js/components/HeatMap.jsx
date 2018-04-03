import React from 'react'
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer'

import {
  markers
} from '../../data/App.data'

const toCords = (cords) => {
  const [ latitude, longitude ] = cords
  return {
    location: new window.google.maps.LatLng(latitude,longitude),
    weight: 100
  }
}


const HeatMap = (
  props
) => {
  const {
    location,
    heatmap
  } = props

  const topMarkers = markers[location][heatmap]

  const radius = 50
  const opacity = 0.5
  const gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]

  const heatmapOptions = { radius, opacity }

  return (
    <HeatmapLayer defaultOptions={heatmapOptions} data={topMarkers.map(toCords)} />
  )
}

export {
  HeatMap
}