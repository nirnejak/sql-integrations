import { Router } from "express"

import queryController from "../controllers/query.controller"

const queryRouter = Router()

queryRouter.get("/", queryController.getQueries)

export default queryRouter
