const express = require('express')
const {getAllAdmin, getAdminById, storeAdmin, updateAdmin, deleteAdmin} = require('../controller/adminController')
const router = express.Router()

router.get('/', getAllAdmin)
router.get('/:id', getAdminById)
router.post('/', storeAdmin)
router.put('/:id', updateAdmin)
router.delete('/:id', deleteAdmin)

module.exports = router