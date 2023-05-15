import { Schema, model } from 'mongoose'
import { IExample } from '../declarations/interfaces'

const templateSchema = new Schema(
  {
    propExample1: {
      type: String,
      required: true
    },
    propExample2: {
      type: Schema.Types.ObjectId,
      ref: 'AnotherModel'
    },
    propExample3: {
      type: Number
    },
    propExample4: {
      type: [String]
    },
    propExample5: {
      type: [Schema.Types.ObjectId]
    },
    propExample6: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
)

const Template = model<IExample>('Example', templateSchema)

export default Template
