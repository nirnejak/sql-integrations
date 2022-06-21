import { Router } from "express"

import isAuthenticated from "../middlewares/authValidator"

import dashboardController from "../controllers/dashboard.controller"

const dashboardRouter = Router()

dashboardRouter.get("/", isAuthenticated, dashboardController.getDashboards)
dashboardRouter.get(
  "/:dashboardId",
  isAuthenticated,
  dashboardController.getDashboards
)
dashboardRouter.post("/", isAuthenticated, dashboardController.getDashboards)
dashboardRouter.put(
  "/:dashboardId",
  isAuthenticated,
  dashboardController.getDashboards
)
dashboardRouter.delete(
  "/:dashboardId",
  isAuthenticated,
  dashboardController.getDashboards
)

export default dashboardRouter
