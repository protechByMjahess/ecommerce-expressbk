import express from 'express';
import { add_carte} from '../controllers/myCarte.controller';




export const myCarte_router = express.Router();


myCarte_router.post("/add",add_carte);
// myCarte_router.post("/addd",test_carte);


export default myCarte_router;
