import TransactionModel from "../../Model/Transaction.Model.js";

const DeleteExpense = async (req, res) => {
    try {
        await TransactionModel.findOneAndDelete({ user_id: req?.betoken, _id: req?.body?._id })
        res.status(200).send({ message: "Deleted Successfully" })
    } catch (error) {
        res.status(400).send({ message: error?.message })
    }
}

export default DeleteExpense