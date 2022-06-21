import { Router } from "express"

import userController from "../controllers/user.controller"

const userRouter = Router()

userRouter.get("/", userController.getUsers)
userRouter.post("/register", userController.registerUser)
userRouter.post("/login", userController.getUsers)
userRouter.post("/forgot-password", userController.getUsers)
userRouter.post("/update-password", userController.getUsers)

export default userRouter
