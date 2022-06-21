import { Router } from "express"

import teamController from "../controllers/team.controller"

const teamRouter = Router()

teamRouter.get("/", teamController.getTeams)
teamRouter.get("/:teamId", teamController.getTeams)
teamRouter.post("/", teamController.getTeams)
teamRouter.put("/:teamId", teamController.getTeams)
teamRouter.delete("/:teamId", teamController.getTeams)

export default teamRouter
