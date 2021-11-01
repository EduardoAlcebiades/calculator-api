import { Router } from "express";

import SumController from "./controller/SumController";
import SubtractController from "./controller/SubtractController";
import MultiplyController from "./controller/MultiplyController";
import DivideController from "./controller/DivideController";

const routes = Router();

routes.post("/sum", SumController.handle);
routes.post("/subtract", SubtractController.handle);
routes.post("/multiply", MultiplyController.handle);
routes.post("/divide", DivideController.handle);

export { routes };
