import express from "express";
import friendRoutes from "./routes/friendRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", express.static("public"));
app.use("/friends", friendRoutes);

// starts the backend app on the given port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
