import Meal from '../Meals/meals.model.js';

export class MealService {
  async findAllMeals() {
    return await Meal.findAll();
  }
  async findOneMeal(id) {
    return await Meal.findOne(id);
  }
  async updateMeal(meal, data) {
    return await meal.update(data);
  }
  async createMeal(data) {
    return await Meal.create(data);
  }

  async deleteMeal(meal) {
    return await meal.update({
      status: false,
    });
  }

}
