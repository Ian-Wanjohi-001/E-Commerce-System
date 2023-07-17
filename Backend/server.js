import cors from "cors";
import express from "express";
import config from "./src/database/config.js";
import productsRoutes from "./src/routes/productsRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import bodyParser from "body-parser";
import reviewsRoute from "./src/routes/reviewRoutes.js";

const app = express();

// Setting cors
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// My routes
productsRoutes(app);
authRoutes(app);
reviewsRoute(app);

app.get("/", (req, res) => {
  res.send("Hello World 😁");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
