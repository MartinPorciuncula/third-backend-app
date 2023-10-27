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
import {validExistRestaurant} from "./restaurant.middleware.js"
import {validExistReview}from "../Reviews/review.middleware.js"
import {protectAccountOwner} from "../Users/users.middleware.js"

router.route('/')
      .get(findAllRestaurants)
      .post(CreateRestaurant)

router.route('/:id')
      .get(findOneRestaurant)
      .patch(updateRestaurant)
      .delete(deleteRestaurant)

      router.post("/reviews/:id",validExistRestaurant,createReviewToRestaurant)

      router.route("/reviews/:restaurantId/:id")
      .patch(validExistRestaurant,validExistReview,protectAccountOwner,updateReview)
      .delete(deleteReview)