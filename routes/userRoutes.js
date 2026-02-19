const express = require('express');
// Mounting the tourRouter and userRouter on specific paths. This means that any request to '/api/v1/tours'
// will be handled by tourRouter, and any request to '/api/v1/users' will be handled by userRouter.
const router = express.Router();

const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
