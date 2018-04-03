const initialMarkersState = {
  points: []
}

const markersReducer = (
  state = initialMarkersState, action
) => {
  const { type, context } = action

  switch (type) {
    case 'LOCATION_FOUND': {
      const points = [...new Set(state.points.concat(context.payload))].slice(0, 50)
      return {
        points
      }
    }
    default:
      return state
  }
}

export {
  markersReducer
}