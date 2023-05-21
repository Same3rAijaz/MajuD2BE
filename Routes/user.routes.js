import * as User from "../Controller/UserController/index.js"
import { Router } from "express"
import middleware from "../Middleware/JWTverify.js"
const router = Router()

router.get('/', middleware, User.getUser)
router.post('/login', User.login)
router.post('/signup', User.signup)
router.post('/update', middleware, User.updateUser)
export default router