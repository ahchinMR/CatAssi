import express from 'express';
import routes from './routes';

const app = express();

// Set up middleware
app.use(express.json());
app.use(routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});