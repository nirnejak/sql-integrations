import { Request, Response } from "express"

/**
 * @route GET /api/database/
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Get Databases of the current user
 */
const getDatabases = (req: Request, res: Response) => {
  res.json({ success: true })
}

export default {
  getDatabases,
}
