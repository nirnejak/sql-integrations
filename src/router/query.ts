import { Router } from "express"

import isAuthenticated from "../middlewares/authValidator"

import queryController from "../controllers/query.controller"

const queryRouter = Router()

queryRouter.get("/", isAuthenticated, queryController.getQueries)

export default queryRouter
