const onOpen = (
  dispatch
) => () => {
  dispatch({ type: 'WEBSOCKET_OPEN' })
}

const onClose = (
  dispatch
) => (
  event
) => {
  dispatch({ type: 'WEBSOCKET_CLOSE', payload: event })
}

const onMessage = (
  dispatch
) => (
  payload
) => {
  const event = JSON.parse(payload.data)
  dispatch(event)
}

let websocket

const websocketMiddleware = (
  store
) => (
  next
) => (
  action
) => {

  const { type, context } = action

  switch (type) {
    case 'WEBSOCKET_CONNECT': {
      const { dispatch } = store
      const { url } = context

      websocket = new WebSocket(url)
      websocket.onopen = onOpen(dispatch)
      websocket.onclose = onClose(dispatch)
      websocket.onmessage = onMessage(dispatch)

      break
    }

    case 'WEBSOCKET_SEND': {
      websocket.send(JSON.stringify(action.payload))
      break
    }

    case 'WEBSOCKET_DISCONNECT': {
      websocket.close()
      break
    }
    default:
      break
  }

  return next(action)
}

export {
  websocketMiddleware
}