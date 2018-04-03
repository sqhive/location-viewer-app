import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GoogleMap } from 'react-google-maps'

import {
  websocketConnect
} from '../actions'

import {
  ConnectedMarkerList
} from './'

import {
  toCoordinates
} from '../helpers'

import {
  centres
} from '../../data/App.data'
import { HeatMap } from './HeatMap'

class MapComponent
  extends Component {

  static defaultProps = {
    points: []
  }

  componentDidMount() {
    const { websocketConnect } = this.props

    websocketConnect('ws://locations-viewer-ws.dashboards')
  }

  render() {
    const {
      location,
      heatmap
    } = this.props

    return (
      <GoogleMap
        defaultZoom={12}
        center={toCoordinates(centres[location])}>

        <HeatMap { ...{ location, heatmap } } />
        <ConnectedMarkerList />
      </GoogleMap>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const ConnectedMapComponent = connect(mapStateToProps, { websocketConnect })(MapComponent)

export {
  MapComponent,
  ConnectedMapComponent
}