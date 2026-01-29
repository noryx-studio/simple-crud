import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './docs/swagger'; // Import the doc
import personRoutes from './routes/personRoutes';

dotenv.config();

const app = express();
const PORT = 8800; // Updated to 8800 per your request

app.use(cors());
app.use(express.json());

// Swagger Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API Routes
app.use('/api/persons', personRoutes);

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/simple-crud')
  .then(() => {
    console.log('Connected to MongoDB');
    console.log(`Docs available at http://localhost:${PORT}/api-docs`);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));