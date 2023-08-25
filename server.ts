import env from 'dotenv';
import app from './app';

env.config();

const PORT = process.env.PORT || 8084;
app.listen(PORT, () => {
	console.log(`server started and listening on ${PORT}`);
});
