import { Request, Response } from "express"

/**
 * @route GET /api/dashboard
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Get Dashboards of the current user
 */
const getDashboards = (req: Request, res: Response) => {
  res.json({ success: true })
}

export default {
  getDashboards,
}
