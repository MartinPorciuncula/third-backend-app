import { DataTypes } from 'sequelize';
import {sequelize} from "../../config/database/database.js"

const Order = sequelize.define(' orders', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    mealId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
  totalPrice: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM("cancelled","completed","active"),
    allowNull: false,
    defaultValue: "active"
  }
});

export default Order;