const express = require('express')
const router = express.Router()
const {getAllTransaction, getTransactionById, storeTransaction, deleteTransactionById} = require('../controller/transactionController')

router.get('/', getAllTransaction)
router.get('/:id', getTransactionById)
router.post('/', storeTransaction)
router.delete('/:id', deleteTransactionById)

module.exports = router