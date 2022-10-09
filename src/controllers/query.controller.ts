import { Request, Response } from "express"

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
  res.json({ success: true })
}

export default {
  getQueries,
  executeQuery,
}
