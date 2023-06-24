const express = require('express')
const {placeCreate,placeUpdate,placeDelete,placeGet,placeGetAll} = require('../controllers/placeController')
const {verifyAdmin} = require('../utils/verifyToken')

const router = express.Router()

router.route('/').post(verifyAdmin,placeCreate)
router.route('/:id').put(verifyAdmin,placeUpdate)
router.route('/:id').delete(verifyAdmin,placeDelete)
router.route('/:id').get(placeGet)
router.route('/').get(placeGetAll)
// router.get('/',placeGetAll)

module.exports = router;