import { Schema, model } from "mongoose";


const TransActionModal = new Schema({
    description: { type: String },
    transaction_type: { type: Boolean },
    user_id: [{ type: Schema.Types.ObjectId, ref: "users" }],
    transaction_limit: { type: Number, default: 99999999 },
    available_balance: { type: Number, default: 9999999 }
})


const TransactionModel = model('transaction', TransActionModal)
export default TransactionModel