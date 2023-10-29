import Restaurant from "../../modules/Restaurants/restaurant.model.js"
import Review from "../../modules/Reviews/review.model.js"
import User from "../../modules/Users/user.model.js"
import Meal from "../../modules/Meals/meals.model.js"
import Order from "../../modules/Orders/orders.model.js"


export const initModel = () => {
    User.hasMany(Review)
    Review.belongsTo(User)

    Restaurant.hasMany(Review)
    Review.belongsTo(Restaurant)

    Restaurant.hasMany(Meal)
    Meal.belongsTo(Restaurant)

    Order.hasOne(Meal)
    Meal.belongsTo(Order)

    User.hasMany(Order)
    Order.belongsTo(User)
}