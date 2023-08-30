import request from 'supertest';
import app from './app';

describe('File Upload Endpoint', () => {
	it('should display the uploaded file name', async () => {
		const response = await request(app)
			.post('/upload')
			.attach('file', 'hello.txt');

		const { fileName } = response.body;
		expect(response.status).toBe(200);
		expect(fileName).toBeDefined();
	});
});
