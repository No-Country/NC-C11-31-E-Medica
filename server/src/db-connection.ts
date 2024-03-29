import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
mongoose.set('strictQuery', true)

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const validEnv = typeof DB_USER === 'string' && typeof DB_PASSWORD === 'string' && typeof DB_HOST === 'string' && typeof DB_NAME === 'string'
const connection = validEnv ? `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority` : 'invalid connection'

mongoose
  .connect(connection)
  .then(() => {
    console.log('E-Medica is connected to', DB_NAME)
  })
  .catch((error) => {
    console.error('Failed connection', error.message)
  })
