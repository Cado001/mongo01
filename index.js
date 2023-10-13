// import { addAfish,getALLFISH,deleteAFish, addAfish } from "./src/fish.js";
// import { closeClient } from "./src/connectDb.js";

import { closeClient } from "./src/connectDb.js";
import { addACar } from "./car.js";



await addACar();
// await deleteAFish();
// await addAfish();
// await getALLFISH();
// await updateOneFish();
// await getAllCar();

closeClient();

