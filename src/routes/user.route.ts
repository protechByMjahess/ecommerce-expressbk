import express from "express";
import { all_users, create_users, delete_user, get_user, search_user, update_user } from "../controllers/user.controller";
import { create_user_validation } from "../validations/create-user.validation";
export const user_route = express.Router();

user_route.get("/alluser", all_users)

user_route.post("/create",create_user_validation(), create_users)
user_route.get("/get_user/:id",get_user)
user_route.post("/search",search_user)
user_route.delete("/delete/:id",delete_user)
user_route.post("/update/:id",update_user)