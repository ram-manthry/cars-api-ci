import { Request, Response } from 'express';

export namespace CarController {
	export const defaultHandler = (_: Request, res: Response) => {
		res.send('Hello World!');
	};
}
