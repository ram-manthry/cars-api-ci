import express, { Request, Response } from 'express';
import cars from './cars-data';
import { defaultHandler } from './car-controller';

const app = express();
app.use(express.json());

app.get('/', defaultHandler);

app.get('/cars', (_: Request, res: Response) => {
	res.send(cars);
});

export default app;
