import express from 'express';

export const router = express.Router();

import {
    findAllRestaurants,
    CreateRestaurant,
    findOneRestaurant,
    updateRestaurant,
    deleteRestaurant,
    createReviewToRestaurant,
    updateReview,
    deleteReview,
} from "./restaurants.controller.js"

router.route('/')
      .get(findAllRestaurants)
      .post(CreateRestaurant)

router.route('/:id')
      .get(findOneRestaurant)
      .patch(updateRestaurant)
      .delete(deleteRestaurant)

      router.post("/reviews/:id",createReviewToRestaurant)

      router.route("/reviews/:restaurantId/:id", updateReview)
      .patch(updateReview)
      .delete(deleteReview)