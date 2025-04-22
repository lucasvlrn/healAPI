// food controller
import { Request, Response } from "express";
const foodsModel = require("../models/food-model");


const fetchFoods = async (request: Request, response: Response) => {
    const { name, type } = request.query

    if (name && !type) {
        try {
            const foods = await foodsModel.fetchFoodsWithName(name);
            return response.status(200).json({ success: `Aqui está o(a) ${name}`, foods })
        }
        catch (err) {
            return response.status(500).json({ Error: "Erro do servidor", err })
        }
    }
    if (!name && type) {
        try {
            const foods = await foodsModel.fetchFoodsWithType(type);
            return response.status(200).json({ success: `Aqui estão os alimentos}`, foods })
        }
        catch (err) {
            return response.status(500).json({ Error: "Erro do servidor", err })
        }
    }

    try {
        const foods = await foodsModel.fetchFoods();
        return response.status(200).json({ success: "Todas as comidas listadas", foods })
    }
    catch (err) {
        return response.status(500).json({ Error: "Erro do servidor ", err })
    }
}

const insertFoods = async (request: Request, response: Response) => {
    try {
        const foods = await foodsModel.insertFoods();
        return response.status(201).json({ success: "Inserido todos os alimentos", foods })
    }
    catch (err) {
        return response.status(500).json({ Error: "Erro do servidor", err })
    }
}

module.exports = {
    fetchFoods,
    insertFoods
}