import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";
const fishDb = db.collection('fish');

const theFish = {
    species: 'tetra',
    origin: 'Amazon',
    color: 'sliver',
    size: '1"',
    family: {
        dad: '🐠', 
        sister: '🍣', 
        mom: { cool: true, special :undefined},
        brother: ['🦁', '🐍']
    }
};


// Add a fish
export async function addAfish() {
    const fishAdded = await db.collection('fish').insertOne(theFish);
    console.log('fishAdded ->', fishAdded)
}

// Get all fishies
export async function getALLFISH() {
    const fishList = await db.collection('fish').find({}).toArray();
    console.table(fishList)
}

// Delete a fish 
// export async function deleteAFish(){
  // 1.find the fish we want to delete ??? 
 //  2. delete it!
    // const fishDeleted = await db.collection('fish').findOneAndDelete({_id: myCleanId});

    // find one and delete by id??? WTF
// const myCleanId = new ObjectId('65281f0551a7262adb9cbf53')

    // db.collection ('fish').findOneAndDelete({_id: '65281f0551a7262adb9cbf53'})
    // console.log('fishdeleted ->', fishDeleted)
// }

// Update fish 
// function uniqueOne(){

// }







