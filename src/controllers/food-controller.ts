// food controller
import { Request, Response } from "express";
const foodsModel = require("../models/food-model");

const fetchFoods = async (request: Request, response: Response) => {
  const { name, type, carbohydrates, proteins } = request.query;
  if (name && !type && !proteins && !carbohydrates) {
    try {
      const foods = await foodsModel.fetchFoodsByName(name);
      return response
        .status(200)
        .json({ success: `Aqui está o(a) ${name}`, foods });
    } catch (err) {
      return response.status(500).json({ Error: "Erro do servidor", err });
    }
  }
  if (
    (!name && type == "fruta") ||
    (!name && type == "legume") ||
    (!name && type == "vegetal")
  ) {
    try {
      const foods = await foodsModel.fetchFoodsByType(type);
      return response
        .status(200)
        .json({ success: `Alimentos filtrados por '${type}'`, foods });
    } catch (err) {
      return response.status(500).json({ Error: "Erro do servidor", err });
    }
  }
  if (carbohydrates) {
    try {
      const foods = await foodsModel.fetchFoodsByCarb(carbohydrates);
      return response.status(200).json({ foods });
    } catch (err) {
      return response.status(500).json({ Error: "Erro no servidor", err });
    }
  }
  if (proteins) {
    try {
      const foods = await foodsModel.fetchFoodsByProtein(proteins);
      return response.status(200).json({ foods });
    } catch (err) {
      return response.status(500).json({ Error: "Erro no servidor", err });
    }
  }
  try {
    const foods = await foodsModel.fetchFoods();
    return response
      .status(200)
      .json({ success: "Todas as comidas listadas", foods });
  } catch (err) {
    return response.status(500).json({ Error: "Erro do servidor ", err });
  }
};

module.exports = {
  fetchFoods,
};
