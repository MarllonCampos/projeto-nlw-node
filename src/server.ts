import {http} from './http'

import './websocket/client'

http.listen(3333, () => {
    console.log(
        'This is a Server who uses HTTP Protocol and WebSocket Protocol')
})

