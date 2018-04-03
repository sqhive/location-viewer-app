import React, { Component } from 'react'

class MapBox
  extends Component {

  constructor(props) {
    super(props)

    this.state = {
      height: '400px'
    }
  }

  componentDidMount() {
    this.setState({
      height: window.innerHeight - 56
    })
  }

  render() {
    const {
      children
    } = this.props

    const {
      height
    } = this.state

    return (
      <div style={{ height }}>
        {children}
      </div>
    )
  }
}

export {
  MapBox
}