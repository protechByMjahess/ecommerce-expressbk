import express from "express";
import { user_route } from "./routes/user.route";
import { createConnection } from 'typeorm';
import { User } from './entities/User';
import { post_route } from "./routes/post.route";
import { auth_route } from "./routes/auth.route";
import { isAuthenticated } from "./middleware/isAuthenticated";
import bicycle_router from "./routes/bicycleRoutes";

const app = express();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req:any, file:any, cb:any) {
    cb(null, 'uploads/');
  },
  filename: function (req:any, file:any, cb:any) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
 

  res.send('File uploaded successfully!');
});

var bodyParser = require('body-parser');
// var multer = require('multer');
// var upload = multer();

app.use(bodyParser.urlencoded({extended:true}))
app.use(upload.array())
app.post('/insertTrackDetails', function(req,res){
  console.log(req.body);
  res.send('REquested data received. check in console!!!')
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/auth", auth_route)
app.use('/api/bicycle', bicycle_router);

app.use(isAuthenticated)
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