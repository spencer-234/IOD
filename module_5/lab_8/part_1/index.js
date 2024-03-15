const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const express = require("express");
const calculatorRoutes = require("./routes/calculatorRoutes.js");

const app = express();
const PORT = 8000;

app.use(express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/calculator", calculatorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
