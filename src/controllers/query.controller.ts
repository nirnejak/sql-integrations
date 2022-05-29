import { Request, Response } from "express"

/**
 * @route GET /api/queries
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Get Queries of the current user
 */
const getQueries = (req: Request, res: Response) => {
  res.json({ success: true })
}

export default {
  getQueries,
}
