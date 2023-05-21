import TransactionModel from "../../Model/Transaction.Model.js";
import UserModel from "../../Model/User.Model.js";

const UpdateExpense = async (req, res) => {
    try {
        if (req?.body?.amount) {
            const oldTransaction = await TransactionModel.findById()
            await UserModel.findByIdAndUpdate(req?.betoken, { transaction_balance: transaction_balance - (oldTransaction?.amount - req?.body?.amount) })
        }
        const updatedTransaction = await TransactionModel.findOneAndUpdate({ _id: req?.query?.id, user_id: req?.betoken }, { ...req?.body })
        res.status(200).send({ message: "Expense Updated SuccessFully ", data: updatedTransaction })
    } catch (error) {
        res.status(400).send({ message: "Bad Request!" })
    }
}
export default UpdateExpense