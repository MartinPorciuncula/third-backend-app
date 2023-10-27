import express from 'express';

export const router = express.Router();

router.route('/').get(findAllMeals);

import {
  findAllMeals,
  findOneMeals,
  updateMeals,
  deleteMeals,
  createMeals,
  } from "./meals.controller.js"
  
router
  .route('/:id')

  .get(findOneMeals)
  .patch(updateMeals)
  .delete(deleteMeals)

  .post(createMeals);
  