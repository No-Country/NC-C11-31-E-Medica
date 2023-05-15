import { Date, Types, Document } from 'mongoose'
import { EnumExample } from './enums'

export interface IExample extends Document {
  propExample1: string
  propExample2: Types.ObjectId
  propExample3: number
  propExample4: string[]
  propExample5: Types.ObjectId[]
  propExample6: boolean
  propExample7: Date
  propExample8: EnumExample
}

export interface ISpecialty extends Document {
  name: string
  description: string
  active: boolean
}
