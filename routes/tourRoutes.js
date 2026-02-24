const express = require('express');

// Mounting the tourRouter and userRouter on specific paths. This means that any request to '/api/v1/tours'
// will be handled by tourRouter, and any request to '/api/v1/users' will be handled by userRouter.
const router = express.Router();
const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  // checkID,
  // checkBody,
} = require('../controllers/tourController');

// PARAM MIDDLEWARE
// This middleware will run for any route that contains the ':id' parameter.
// It logs the ID of the tour being accessed.
// router.param('id', checkID);

// router.route('/').get(getAllTours).post(checkBody, createTour);
router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
