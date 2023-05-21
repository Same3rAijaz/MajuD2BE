import * as User from "../Controller/UserController/index.js"
import { Router } from "express"

const router = Router()

router.post('/login', User.login)
router.post('/signup', User.signup)

export default router