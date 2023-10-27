import Restaurant from "../../modules/Restaurants/restaurant.model.js"
import Review from "../../modules/Reviews/review.model.js"
import User from "../../modules/Users/user.model.js"



export const initModel= ()=>{
User.hasMany(Review)
Review.belongsTo(User)

Restaurant.hasMany(Review)
Review.belongsTo(Restaurant)
}