import express from "express";
import { all_posts, create_post, delete_post, edit_post, get_post } from "../controllers/post.controller";

export const post_route = express.Router();

post_route.get("/allposts", all_posts )
post_route.get("/post/:id", get_post )
post_route.post("/create", create_post )
post_route.delete("/:id", delete_post )
post_route.put("/:id", edit_post )

