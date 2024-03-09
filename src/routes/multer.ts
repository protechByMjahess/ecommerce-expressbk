import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
        cb(null, 'uploads/');
    },
    filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export const multer_router = express.Router();

multer_router.post('/multer', upload.single('image'), (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const imagePath = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
    console.log('Image uploaded:', imagePath);
    res.send(imagePath);
});

export default multer_router;
