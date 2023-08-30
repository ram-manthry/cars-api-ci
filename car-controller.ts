import { Request, Response } from 'express';
export namespace CarController {
	export const defaultHandler = (_: Request, res: Response) => {
		res.send('Hello World!');
	};

	export const uploadHandler = (req: Request, res: Response) => {
		if (!req.file) {
			return res.status(400).json({ message: 'No file uploaded' });
		}

		const fileName = req.file.originalname;
		res.status(200).json({ fileName });
	};
}
