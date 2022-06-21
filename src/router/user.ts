import { Router } from "express"

import userController from "../controllers/user.controller"

const userRouter = Router()

userRouter.get("/", userController.getUsers)
userRouter.get("/register", userController.getUsers)
userRouter.get("/login", userController.getUsers)
userRouter.get("/forgot-password", userController.getUsers)
userRouter.get("/update-password", userController.getUsers)

export default userRouter
