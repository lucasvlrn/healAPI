import { connectToDatabase } from "../config/db-config";
const foodjson = require('../food.json')

async function fetchFoods() {
    try {
        const db = await connectToDatabase();
        const findFoods = await db.collection("foods").find().toArray();
        console.log(findFoods);
        return findFoods;
    } catch (err) {
        console.error("Não foi encontrado");
    }
}

async function fetchFoodsWithName(name: string) {
    try {
        const db = await connectToDatabase()
        const findFood = await db.collection("foods").findOne({ name: name });
        console.log(findFood);
        return findFood
    } catch (err) {
        console.error("Não encontrado")
    }
}

async function fetchFoodsWithType(type: string) {
    try {
        const db = await connectToDatabase()
        const findFoods = await db.collection("foods").find({ type: type }).toArray();
        console.log(findFoods);
        return findFoods;
    } catch (err) {
        console.error(err)
    }
}


async function insertFoods() {
    try {
        const db = await connectToDatabase();
        const insertFoods = await db.collection("foods").insertMany(foodjson)
        console.log(insertFoods);
    }
    catch (err) {
        console.error("Não foi encontrado");
    }
}

module.exports = {
    fetchFoods,
    insertFoods,
    fetchFoodsWithName,
    fetchFoodsWithType
}