const express = require('express')
const router = express.Router()
const {verifyUser,verifyAdmin} = require('../utils/verifyToken')
const {createUser,updateUser,deleteUser,getUser,getAllUser} = require('../controllers/userController')

// router.get('/checkauth',verifyToken,(req,res,next)=>{
//     res.json('logged in')
// })
// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.json('you are authorized')
// })
// router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
//     res.json('hy admin')
// })

// router.route('/checkauthjjj').get(verifyUser,(req,res,next)=>{
//     res.json('logged in')})

router.route('/:id').put(verifyUser,updateUser)
router.route('/:id').delete(verifyUser,deleteUser)
router.route('/:id').get(verifyUser,getUser)
router.route('/').get(verifyAdmin,getAllUser)

module.exports = router;