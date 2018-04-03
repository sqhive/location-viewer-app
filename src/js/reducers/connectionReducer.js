const initialConnectionState = {
  isConnected: false
}

const connectionReducer = (
  state = initialConnectionState, action
) => {
  const { type } = action

  switch (type) {
    case 'WEBSOCKET_OPEN': {
      return {
        isConnected: true
      }
    }
    case 'WEBSOCKET_CLOSE': {
      return {
        isConnected: false
      }
    }
    default:
      return state
  }
}

export {
  connectionReducer
}