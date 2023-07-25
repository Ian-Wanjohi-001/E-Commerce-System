import cors from "cors";
import express from "express";
import config from "./src/database/config.js";
import productsRoutes from "./src/routes/productsRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import bodyParser from "body-parser";
import reviewsRoute from "./src/routes/reviewRoutes.js";
import cartRoutes from "./src/routes/cartRoutes.js";
// import orderRoutes from "./src/routes/orderRoutes.js"; // Added orderRoutes

const app = express();


// Setting cors
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// My routes
productsRoutes(app);
authRoutes(app);
reviewsRoute(app);
cartRoutes(app);
// orderRoutes(app); // Added orderRoutes

app.get("/", (req, res) => {
  res.send("Hello World 😁");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
