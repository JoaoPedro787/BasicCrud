const express = require('express');

const router = express.Router();

const { UserMiddleWare } = require('../middleware/user-middle-ware');
const { NewUserController, getAllUsersController,updateUserController,deleteUserController } = require('../controller/user-controller');

router.post('/', UserMiddleWare, NewUserController);
router.get('/', getAllUsersController);
router.put('/:id',updateUserController);
router.delete('/:id',deleteUserController);

module.exports = router;