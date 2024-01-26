const express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router()
const {getAllProducts, getProductById, storeProduct, updateProduct, deleteProductById} = require('../controller/productController')


// multer file store configuration
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const path = `../src/storage/products/${req.body.product_name}/${file.fieldname}`
        fs.mkdirsSync(path)
        cb(null, path)
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
        cb(null, `${uniqueSuffix}${file.originalname.substr(-4)}`)
    }
})
const upload = multer({ storage: storage })
const fUpload = upload.fields([
    {name: 'photo_product', maxCount: 100},
    {name: 'file_psd', maxCount: 1},
    {name: 'mockup', maxCount: 100}
])
//

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', fUpload, storeProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProductById)

module.exports = router