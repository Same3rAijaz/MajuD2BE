import UserModel from "../../Model/User.Model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const Signup = async (req, res) => {
    try {
        const password = bcrypt.hash(req?.body?.password)
        const user = await new UserModel({ ...req.body, password }).save()
        const token = jwt.sign(user._id?.toString(), process.env.JWT_SECRET_KEY)
        return res.status(200).send({ message: "Success!", data: { user: user, token: token } })
    } catch (error) {
        console.log(error?.message)
        return res.status(400).send({ message: "Bad Request!" })
    }
}

export default Signup