import { connectToDatabase, disconnectToDatabase } from "../config/db-config";

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

async function fetchFoodsByCarb(carbohydrates: number) {
  if (isNaN(carbohydrates)) {
    return "Isto deve ser um valor numérico.";
  }
  try {
    const db = await connectToDatabase();
    const findFoods = await db
      .collection("foods")
      .find({ carbohydrates: Number(carbohydrates) })
      .toArray();
    console.log(findFoods);
    await disconnectToDatabase();
    return findFoods;
  } catch (err) {
    console.error("Não encontrado", err);
  }
  return "Coloque um valor";
}

async function fetchFoodsByProtein(proteins: number) {
  if (isNaN(proteins)) {
    return "Isto deve ser um valor numérico.";
  }
  try {
    const db = await connectToDatabase();
    const findFoods = await db
      .collection("foods")
      .find({ proteins: Number(proteins) })
      .toArray();
    console.log(findFoods);
    await disconnectToDatabase();
    return findFoods;
  } catch (err) {
    console.error("Não encontrado", err);
  }
  return "Coloque um valor";
}

module.exports = {
  fetchFoods,
  fetchFoodsByName,
  fetchFoodsByType,
  fetchFoodsByCarb,
  fetchFoodsByProtein,
};
