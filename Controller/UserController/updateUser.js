import UserModel from "../../Model/User.Model.js";
import bcrypt from "bcrypt"

const UpdateUser = async (req, res) => {
    try {
        let updatedUser = null
        if (req?.body?.password) {
            const password = await bcrypt.hash(req?.body?.password, 2)
            updatedUser = await UserModel.findByIdAndUpdate(req?.betoken, { ...req?.body, password })
        } else {
            updatedUser = await UserModel.findByIdAndUpdate(req?.betoken, { ...req?.body })
        }
        res.status(200).send(updatedUser)
    } catch (error) {
        res.status(400).send("Bad Request!")
    }
}

export default UpdateUser