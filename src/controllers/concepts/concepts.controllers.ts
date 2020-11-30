import { Request, Response } from 'express'
import { getAllDataFromSchema } from '../../module/mongoose/mongoose.config'
import { DataRes } from '../../types'
import ConceptSchema from '../../models/concepts.schema'

const getAllConcepts = async (req: Request, res: Response): Promise<void> => {
  const { error, message, data }: DataRes = await getAllDataFromSchema(
    ConceptSchema,
  )
  if (error) {
    res.status(500).send(message)
  }
  res.status(200).json(data)
}

const createConcept = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body)
  res.status(200).send('success')
}

export { getAllConcepts, createConcept }
