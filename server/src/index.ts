import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/router'

const app = express()

// env variables
dotenv.config()
const { SERVER_LOCAL_PORT } = process.env

// settings
app.set('port', process.env.PORT ?? SERVER_LOCAL_PORT)

// middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// routes
app.use('/', router)

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})
