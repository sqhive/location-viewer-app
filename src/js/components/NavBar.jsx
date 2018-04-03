import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NavBar
  extends Component {

  static defaultProps = {
    numMarkers: 0
  }

  render() {
    const {
      isConnected,
      numMarkers
    } = this.props

    return (
      <nav className="navbar navbar-expand-lg navbar-light border-bottom border-dark">
        <a className="navbar-brand" href="/">
          Locations Viewer
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item pr-5">
              <b>{numMarkers}</b> points
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                Heat Map
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <h6 className="dropdown-header">New York</h6>
                <Link className="dropdown-item" to="/newyork/top10">Top 10 Locations</Link>
                <Link className="dropdown-item" to="/newyork/top25">Top 25 Locations</Link>
                <Link className="dropdown-item" to="/newyork/top100">Top 100 Locations</Link>
                <div className="dropdown-divider"></div>
                <h6 className="dropdown-header">London</h6>
                <Link className="dropdown-item" to="/london/top10">Top 10 Locations</Link>
                <Link className="dropdown-item" to="/london/top25">Top 25 Locations</Link>
                <Link className="dropdown-item" to="/london/top100">Top 100 Locations</Link>
              </div>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <button className={`btn btn-outline-${isConnected ? 'success' : 'secondary'} my-2 my-sm-0`} disabled>
              { isConnected ? 'Connected' : 'Connecting...' }
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { markers, connection } = state
  const { points } = markers
  const { isConnected } = connection
  return {
    isConnected,
    numMarkers: points.length
  }
}

const ConnectedNavBar = connect(mapStateToProps)(NavBar)

export {
  NavBar,
  ConnectedNavBar
}