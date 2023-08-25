import request from 'supertest';
import app from './app';

describe('Cars API Endpoint Tests', () => {
	it('should return Hello World! on GET /', async () => {
		// Arrange
		const expected = 'Hello World!';

		// Act
		const actual = await request(app).get('/');

		// Assert
		expect(actual.text).toBe(expected);
	});

	it('should return 3 cars on GET /cars', async () => {
		// Arrange
		const expected = 3;

		// Act
		const actual = await request(app).get('/cars');

		// Assert
		expect(JSON.parse(actual.text).length).toBe(expected);
	});
});
