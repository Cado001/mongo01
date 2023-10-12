import { addAfish,getALLFISH } from "./src/fish.js";
import { closeClient } from "./src/connectDb.js";


await addAfish();
await getALLFISH();

closeClient();
