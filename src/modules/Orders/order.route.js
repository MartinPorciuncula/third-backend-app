import express from 'express';

export const router = express.Router();

import {
    createOrder,
    findOneOrder,
    updateOrder,
    deleteOrder,
    findAllUserOrders,
} from "./order.controller.js"

router.route('/').post(createOrder);

router.route('/:id')
    .get(findOneOrder)
    .patch(updateOrder)
    .delete(deleteOrder);

router.route('/:me').get(findAllUserOrders);
