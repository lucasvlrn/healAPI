import { connectToDatabase, disconnectToDatabase } from "../config/db-config";
const foodjson = require("../food.json");

async function fetchFoods() {
  try {
    const db = await connectToDatabase();
    const findFoods = await db.collection("foods").find().toArray();
    console.log(findFoods);
    await disconnectToDatabase();
    return findFoods;
  } catch (err) {
    console.error("Não foi encontrado");
  }
}

async function fetchFoodsByName(name: string) {
  try {
    const db = await connectToDatabase();
    const findFood = await db
      .collection("foods")
      .findOne({ name: { $regex: name, $options: "i" } });
    console.log(findFood);
    await disconnectToDatabase();
    return findFood;
  } catch (err) {
    console.error("Não encontrado", err);
  }
}

async function fetchFoodsByType(type: string) {
  try {
    const db = await connectToDatabase();
    const findFoods = await db
      .collection("foods")
      .find({ type: { $regex: type, $options: "i" } })
      .toArray();
    console.log(findFoods);
    await disconnectToDatabase();
    return findFoods;
  } catch (err) {
    console.error("Não encontrado", err);
  }
}

async function insertFoods() {
  try {
    const db = await connectToDatabase();
    const insertFoods = await db.collection("foods").insertMany(foodjson);
    console.log(insertFoods);
    await disconnectToDatabase();
  } catch (err) {
    console.error("Não foi encontrado");
  }
}

module.exports = {
  fetchFoods,
  insertFoods,
  fetchFoodsByName,
  fetchFoodsByType,
};
