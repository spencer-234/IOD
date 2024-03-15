import express from 'express';
import itemRoutes from './routes/items.js';
import swaggerUi from "swagger-ui-express";
import fs from 'fs';

const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json').toString());

const app = express();
const PORT = 8000;

app.use(express.static('public'));
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
    );
app.use('/items', itemRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})