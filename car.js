import { db } from "./src/connectDb.js";
const carDb = db.collection('car');

const theCar = {
    make: 'Dodge',
    model: 'Charger',
    color: 'Orange',
    origin: 'Michigan',
    family: {
        Dad: '🚗',
        BigBro: '🏎️',
        LilBro: '🚙',
        Mom: '🚐'
    }
};

// Add a car 
export async function addACar(){
    const carAdded = await db.collection('car').insertOne(theCar);
    console.log('carAdded ->', carAdded)
}

// Create a function to read / get all vehicles
// export async function getALLCAR(){
//    const carList = await db.collection('car').find({}).toArray();
    // console.table(carList);
// }


