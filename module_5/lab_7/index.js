import express from 'express';
import calculatorRoutes from "./routes/calculatorRoutes.js";

const app = express();
const PORT = 8000;

app.use(express.static('public'));

app.use('/calculator', calculatorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})