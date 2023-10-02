import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userroutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.use(express.json()); // Allow us to accept JSON data in the body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userroutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Server started at http://localhost:5000");
});    