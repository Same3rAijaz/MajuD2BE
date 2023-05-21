import { Schema, model } from "mongoose";


const UserModal = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    phone: { type: String },
    transaction_id: [{ type: Schema.Types.ObjectId, ref: "transactions" }],
    transaction_limit: { type: Number, default: 99999999 },
    available_balance: { type: Number, default: 9999999 }
})


const UserModel = model('users', UserModal)
export default UserModel