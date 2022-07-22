import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

/**
 * @route GET /api/user/
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Get Users
 */
const getUsers = (req: Request, res: Response) => {
  const users = [
    {
      name: "Jitendra",
      email: "jeetnirnejak@gmail.com",
      contact: "7869290297",
    },
  ]
  res.json({ users })
}

type UserRegisterRequest = {
  name: string
  email: string
  password: string
}

/**
 * @route POST /api/user/register/
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Register a User
 */
const registerUser = async (
  req: Request<{}, {}, UserRegisterRequest, {}>,
  res: Response
) => {
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  })
  res.json({ user })
}

type UserLoginRequest = {
  name: string
  email: string
  password: string
}
/**
 * @route POST /api/user/login/
 * @access Public
 * @param req Request Object
 * @param res Response Object
 * @description Login User
 */
const loginUser = async (
  req: Request<{}, {}, UserLoginRequest, {}>,
  res: Response
) => {
  const user = await prisma.user.findUnique({
    where: { email: req.body.email },
  })

  // Check if user exists
  if (!user) {
    return res.status(401).json({ error: "User not found" })
  }
  // Match password
  // return res.status(401).json({ error: "Invalid Credentials" })

  jwt.sign(
    { user },
    process.env.JWT_SECRET,
    { expiresIn: "1 day" },
    (err, token) => {
      if (err) throw err

      res.json({ user: { ...user, token } })
    }
  )
}

export default {
  getUsers,
  registerUser,
  loginUser,
}
