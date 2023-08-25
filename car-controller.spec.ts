import { CarController } from './car-controller';
import { Request, Response } from 'express';

describe('defaultHandler', () => {
	it('should send "Hello World!" response', () => {
		const mockRequest = {} as Request;
		const mockResponse = {
			send: jest.fn(),
		} as unknown as Response;

		CarController.defaultHandler(mockRequest, mockResponse);

		expect(mockResponse.send).toHaveBeenCalledWith('Hello World!');
	});
});
