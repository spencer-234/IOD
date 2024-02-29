import express from 'express';
import calculatorRoutes from "./routes/calculatorRoutes.js";

const PORT = 8000;

const app = express();

app.use(express.json());

app.use(express.static('public'));

// set up routes
app.use('/calculator', calculatorRoutes);

app.listen(PORT, () => {
    console.log(`Server live at PORT ${PORT}`);
})