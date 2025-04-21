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
    insertFoods
}