import express, { Request, Response } from 'express';
import cars from './cars-data';
import { CarController } from './car-controller';
import multer from 'multer';

const app = express();
app.use(express.json());

app.get('/', CarController.defaultHandler);

app.get('/cars', (_: Request, res: Response) => {
	res.send(cars);
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
	if (!req.file) {
		return res.status(400).json({ message: 'No file uploaded' });
	}

	const fileName = req.file.originalname;
	res.status(200).json({ fileName });
});

export default app;
