import express from 'express';
import { add_carte, s_delete_user, search_cart_history} from '../controllers/myCarte.controller';




export const checkout_router = express.Router();


checkout_router.post("/add",add_carte);
checkout_router.post("/search",search_cart_history)
// myCarte_router.post("/delete/:id",s_delete_user)


export default checkout_router;
