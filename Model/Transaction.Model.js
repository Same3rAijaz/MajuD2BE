import { Schema, model } from "mongoose";


const TransActionModal = new Schema({
    description: { type: String },
    transaction_type: { type: Number },
    amount: { type: Number },
    name: { type: String },
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    transaction_date: { type: Date, default: Date.now() }
})


const TransactionModel = model('transaction', TransActionModal)
export default TransactionModel