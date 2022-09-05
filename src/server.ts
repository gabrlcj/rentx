import express from "express";
import { AppDataSource } from "./database/data-source";
import swaggerUi from "swagger-ui-express";

import "./shared/container";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
const port = 3333;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.listen(port, () => console.log(`Server is running on port ${port}!`));
