import express, { Application, Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"

import userRouter from "./router/user"
import teamRouter from "./router/team"
import queryRouter from "./router/query"
import databaseRouter from "./router/database"
import dashboardRouter from "./router/dashboard"
import requestLogger from "./middlewares/requestLogger"
import errorHandler from "./middlewares/errorHandler"

dotenv.config()
const app: Application = express()

app.use(cors())
app.use(requestLogger)

app.get("/", (req: Request, res: Response) => {
  res.locals = { name: "Jitendra Nirnejak" }
  res.send(`Hello Typescript!`)
})

// Routes
app.use("/api/user", userRouter)
app.use("/api/team", teamRouter)
app.use("/api/query", queryRouter)
app.use("/api/database", databaseRouter)
app.use("/api/dashboard", dashboardRouter)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Server Started at ${process.env.PORT}`)
})
