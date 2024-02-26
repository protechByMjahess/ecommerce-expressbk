import express from "express";
import { user_route } from "./routes/user.route";
import { createConnection } from 'typeorm';
import { User } from './entities/User';
import { post_route } from "./routes/post.route";

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use ("/api/users", user_route)
app.use("/api/posts", post_route)

createConnection()
  .then(async (connection) => {
    console.log('Connected to MySQL');
    // Create express routes or middleware that interacts with the database
  })
  .catch((error) => console.log('TypeORM connection error: ', error));

app.listen(3008, () => {
  console.log('Server is running on port 3000');
});