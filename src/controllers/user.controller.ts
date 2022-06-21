import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

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

export default {
  getUsers,
  registerUser,
}
