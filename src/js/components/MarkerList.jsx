import React from 'react'
import { connect } from 'react-redux'
import { Marker } from 'react-google-maps'

import {
  toCoordinates
} from '../helpers'

const MarkerList = (
  props
) => {
  const { points } = props
  return points.map((marker, index) => <Marker key={index} opacity={0.5} position={toCoordinates(marker)}/>)
}

const mapStateToProps = (state, ownProps) => {
  const { markers } = state
  return {
    ...markers
  }
}

const ConnectedMarkerList = connect(mapStateToProps)(MarkerList)

export {
  MarkerList,
  ConnectedMarkerList
}