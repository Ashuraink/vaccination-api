import { Router } from "express";
import { CityController } from "../controllers/cityController";

const routes = Router();
const cityController = new CityController();

routes.get("/cities", cityController.getCities);
routes.get("/cities/:id", cityController.getCityById);

export default routes;