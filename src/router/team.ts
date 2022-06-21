import { Router } from "express"

import isAuthenticated from "../middlewares/authValidator"

import teamController from "../controllers/team.controller"

const teamRouter = Router()

teamRouter.get("/", isAuthenticated, teamController.getTeams)
teamRouter.get("/:teamId/", isAuthenticated, teamController.getTeams)
teamRouter.post("/", isAuthenticated, teamController.getTeams)
teamRouter.put("/:teamId/", isAuthenticated, teamController.getTeams)
teamRouter.delete("/:teamId/", isAuthenticated, teamController.getTeams)

export default teamRouter
