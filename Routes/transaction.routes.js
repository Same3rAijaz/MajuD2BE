import * as Transaction from "../Controller/TransactionController/index.js"
import { Router } from "express"
const router = Router()

router.get('/', Transaction.getTransaction)
router.post('/create', Transaction.createdTransaction)
router.delete('/', Transaction.deleteTransaction)
router.put('/', Transaction.updateTransaction)

export default router