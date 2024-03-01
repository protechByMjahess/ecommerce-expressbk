import express from 'express';

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

  

export const multer_router = express.Router();

multer_router.post('/multer', upload.single('image'), (req, res) => {
   
  
    res.send('File uploaded successfully!');
  });



// bicycle_router.post('/bicycles', add_bycicle);

export default multer_router;