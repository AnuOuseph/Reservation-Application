const express = require('express')
const {placeCreate,placeUpdate,placeDelete,placeGet,placeGetAll} = require('../controllers/placeController')

const router = express.Router()

router.route('/').post(placeCreate)
router.route('/:id').put(placeUpdate)
router.route('/:id').delete(placeDelete)
router.route('/:id').get(placeGet)
router.route('/').get(placeGetAll)
// router.get('/',placeGetAll)

module.exports = router;