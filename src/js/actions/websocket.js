const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT'
const WEBSOCKET_OPEN = 'WEBSOCKET_OPEN'
const WEBSOCKET_CLOSE = 'WEBSOCKET_CLOSE'

export const websocketConnect = (url) => {
  return {
    type: WEBSOCKET_CONNECT,
    context: {
      url
    }
  }
}