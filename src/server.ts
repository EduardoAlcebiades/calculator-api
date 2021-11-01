import "dotenv/config";
import express from "express";

import { routes } from "./routes";

const port = process.env.APP_PORT || 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server started successful in port ${port}`);
});
