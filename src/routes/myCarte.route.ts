import express from 'express';
import { add_carte, search_cart_history} from '../controllers/myCarte.controller';




export const myCarte_router = express.Router();


myCarte_router.post("/add",add_carte);
myCarte_router.post("/search",search_cart_history)


export default myCarte_router;
