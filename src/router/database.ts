import { Router } from "express"

import isAuthenticated from "../middlewares/authValidator"

import databaseController from "../controllers/database.controller"

const databaseRouter = Router()

databaseRouter.get("/", isAuthenticated, databaseController.getDatabases)
databaseRouter.get(
  "/:databaseId",
  isAuthenticated,
  databaseController.getDatabases
)
databaseRouter.post("/", isAuthenticated, databaseController.getDatabases)
databaseRouter.put(
  "/:databaseId",
  isAuthenticated,
  databaseController.getDatabases
)
databaseRouter.delete(
  "/:databaseId",
  isAuthenticated,
  databaseController.getDatabases
)

export default databaseRouter
