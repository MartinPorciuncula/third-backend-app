import { AppError, catchAsync } from "../../errors/index.js"
import { validateOrder } from "./order.schema.js"
import { OrderServices } from "./order_service.js"

const orderService = new OrderServices()

export const createOrder = catchAsync(async (req, res, next) => {

    const { hasError, errorMessages, orderData } = validateOrder(req.body)

    if (hasError) {
        return res.status(422).json({
            status: 'error',
            message: errorMessages
        })
    }

    const { quantity, mealId } = req.body

    const meal = await orderService.findOneOrder(mealId)

    if (!meal) {
        next(new AppError(`Meal whit id ${mealId} not found`, 404))
    }

    const order = await orderService.createOrder({
        mealId: mealId,
        quantity: quantity,
        orderData
    })

    return res.status(201).json(order)

})

export const findOneOrder = catchAsync(async (req, res, next) => {

})

export const updateOrder = catchAsync(async (req, res, next) => {

})

export const deleteOrder = catchAsync(async (req, res, next) => {

})

export const findAllUserOrders = catchAsync(async (req, res, next) => {

})