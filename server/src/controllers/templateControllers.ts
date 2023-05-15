import '../db-connection'
import Example from '../models/templateModel'
import { IExample } from '../declarations/interfaces'

export async function exampleController1 ():
Promise<IExample[]> {
  const exampleDocument = await Example.find({})
  // .populate('AnotherModel')
  return exampleDocument
}
