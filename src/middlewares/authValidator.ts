import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers.authorization

  if (typeof bearerHeader !== "undefined") {
    const token = bearerHeader.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
      if (error) {
        throw error
      } else {
        if (payload) {
          res.locals.token = token
          res.locals.user = payload
          next()
        }
      }
    })
  } else {
    throw new Error("Auth Token Required")
  }
}

export default isAuthenticated
