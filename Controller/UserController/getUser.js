import UserModel from "../../Model/User.Model.js"


const getUser = async (req, res) => {
    try {
        console.log(req?.body?.user_id)
        const user = await UserModel.findById(req?.body?.user_id)
        res.status(200).send({ message: "Success", data: user })
    } catch (error) {
        res.status(400).send("Bad Request!")
    }
}

export default getUser