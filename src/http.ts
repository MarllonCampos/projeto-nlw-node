import express from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import './database'
import { routes } from './routes';
import path from 'path'

const app = express();
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))
app.set('views', path.join(__dirname, '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

const http = createServer(app) // Criando protocolo htpp
const io = new Server(http)  // Criando protocolo WS (WebSocket)

app.get('/pages/client', (req, res) => {
    return res.render('html/client.html')
})


io.on('connection', (socket: Socket) => {
    console.log('Usuário Conectado', socket.id)
})

app.use(routes)



app.get('*', (req, res) => {
    res.send('HEY WAKEUP, YOU MISSED A ROUTE')
})


export {http, io}