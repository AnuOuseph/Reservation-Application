const express = require('express')
const {placeCreate,placeUpdate,placeDelete,placeGet,placeGetAll,countByCity,countByType} = require('../controllers/placeController')
const {verifyAdmin} = require('../utils/verifyToken')

const router = express.Router()

router.route('/').post(placeCreate)
router.route('/:id').put(verifyAdmin,placeUpdate)
router.route('/find/:id').delete(verifyAdmin,placeDelete)
router.route('/find/:id').get(placeGet)
router.route('/').get(placeGetAll)
router.route('/countByCity').get(countByCity)
router.route('/countByType').get(countByType)

module.exports = router;