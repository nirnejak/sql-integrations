import { Request, Response } from "express"

/**
 * @route GET /api/team
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Get Teams
 */
const getTeams = (req: Request, res: Response) => {
  res.json({ success: true })
}

export default {
  getTeams,
}
