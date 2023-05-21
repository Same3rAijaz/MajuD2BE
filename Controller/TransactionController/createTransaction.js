import TransactionModel from "../../Model/Transaction.Model.js";
import UserModel from "../../Model/User.Model.js";

const CreateTransaction = async (req, res) => {
    try {
        const User = await UserModel.findById(req?.betoken)
        if (req?.body?.amount) {
            const createdTransaction = await new TransactionModel({ ...req?.body, user_id: req?.betoken }).save()
            await UserModel.findByIdAndUpdate(req?.betoken, { transaction_limit: (User?.transaction_limit - req?.body?.amount), $push: { transaction_id: createdTransaction?._id } })
            res.status(200).send({ message: "Expense Created SuccessFully", data: createdTransaction })
        } else {
            throw new Error("Budget Limit Exceed!")
        }
    } catch (error) {
        res.status(400).send({ message: error?.message })
    }
}
export default CreateTransaction