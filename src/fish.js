import { db } from "./connectDb.js";

const theFish = {
species: 'tetra',
origin: 'Amazon',
color: 'sliver',
size: '1"'
};

// Add a fish
export async function addAfish() {
    await db.collection('fish').insertOne(theFish);
}

// Get all fishies
export async function getALLFISH(){
  const fishList = await db.collection('fish').find({}).toArray();
  console.table(fishList)
}
