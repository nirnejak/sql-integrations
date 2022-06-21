import { Router } from "express"

import databaseController from "../controllers/database.controller"

const databaseRouter = Router()

databaseRouter.get("/", databaseController.getDatabases)
databaseRouter.get("/:databaseId", databaseController.getDatabases)
databaseRouter.post("/", databaseController.getDatabases)
databaseRouter.put("/:databaseId", databaseController.getDatabases)
databaseRouter.delete("/:databaseId", databaseController.getDatabases)

export default databaseRouter
