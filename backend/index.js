// Index File
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT, database_url } from "./src/config/key/secretKeys.js";
import logger from "./src/config/logger.js";
const app = express();

app.use(express.json());
app.use(cors());

const port = PORT || 4000;

mongoose
  .connect(database_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      logger.info(`server listening on port: ${port}`);
    });
    logger.info("database connected");
  })
  .catch((err) => {
    logger.error(`Found An Error while connecting to mongoDB ->`, err);
  });

// Routes
import bookRoutes from "./src/routes/books.js";
app.use("/api/v1/books", bookRoutes);
