import { withGoogleMap, withScriptjs } from 'react-google-maps'

import {
  ConnectedMapComponent
} from './MapComponent'

const GoogleMapComponent = withScriptjs(withGoogleMap(ConnectedMapComponent))

export {
  GoogleMapComponent
}