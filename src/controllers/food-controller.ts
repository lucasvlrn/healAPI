// food controller
import { Request, Response } from "express";
const foodsModel = require("../models/food-model");

const fetchFoods = async (request: Request, response: Response) => {
    try {
        const foods = await foodsModel.fetchFoods();
        return response.status(200).json({ success: "all foods here", foods })
    }
    catch (err) {
        return response.status(500).json({ Error: "Erro do servidor", err })
    }
}

const insertFoods = async (request: Request, response: Response) => {
    try {
        const foods = await foodsModel.insertFoods();
        return response.status(201).json({ success: "all foods here", foods })
    }
    catch (err) {
        return response.status(500).json({ Error: "Erro do servidor", err })
    }
}

module.exports = {
    fetchFoods,
    insertFoods
}