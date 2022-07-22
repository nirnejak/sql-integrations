import { Request, Response } from "express"
import { MongoClient } from "mongodb"

/**
 * @route GET /api/query/
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Get Queries of the current user
 */
const getQueries = (req: Request, res: Response) => {
  res.json({ success: true })
}

/**
 * @route GET /api/query/execute
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Execute a mongo query
 */
const executeQuery = (req: Request, res: Response) => {
  const url = "mongodb://localhost/EmployeeDB"

  MongoClient.connect(url, (err, db) => {
    if (err) throw err

    const cursor = db.collection("Employee").find(req.body.query)

    cursor.each((error: any, doc: any) => {
      if (error) throw error

      console.log(doc)
    })
  })
  res.json({ success: true })
}

export default {
  getQueries,
  executeQuery,
}
