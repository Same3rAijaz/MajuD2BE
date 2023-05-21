import TransactionModel from "../../Model/Transaction.Model.js";

const GetTransactions = async (req, res) => {
    try {
        let filters = { user_id: req?.body?.user_id };

        if (req?.query?.transaction_type || req?.query?.date) {
            if (req?.query?.transaction_type) {
                filters['transaxtion_type'] = req?.query?.transaction_type
            }
            if (req?.query?.transaction) {
                filters['transaction_date'] = req?.query?.date
            }
        }
        const Transactions = await TransactionModel.find(filters)
        res.status(200).send(Transactions)
    } catch (error) {
        res.status(400).send("Bad Request!")
    }
}

export default GetTransactions