import { Router } from "express"

import dashboardController from "../controllers/dashboard.controller"

const dashboardRouter = Router()

dashboardRouter.get("/", dashboardController.getDashboards)
dashboardRouter.get("/:dashboardId", dashboardController.getDashboards)
dashboardRouter.post("/", dashboardController.getDashboards)
dashboardRouter.put("/:dashboardId", dashboardController.getDashboards)
dashboardRouter.delete("/:dashboardId", dashboardController.getDashboards)

export default dashboardRouter
