import TransactionModel from "../../Model/Transaction.Model.js";
import UserModel from "../../Model/User.Model.js";

const DashboardApi = async (req, res) => {
    try {
        const allTransactions = await TransactionModel.find({ user_id: req?.betoken })
        const userDetail = await UserModel.findById(req?.betoken)
        let allexpenses = 0
        const calcutaling = await allTransactions.map((e) => {
            return allexpenses += e?.amount
        })
        res.status(200).send({ message: "Successfull", data: { transactions: allTransactions, user: userDetail, expenses: allexpenses } })
    } catch (error) {
        res.status(400).send({ emssage: "Bad Request!" })
    }
}

export default DashboardApi