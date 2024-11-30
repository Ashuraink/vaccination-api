import { Request, Response } from "express";
import { CityService } from "../services/cityService";

export class CityController {
  async getCities(req: Request, res: Response) {
    const service = new CityService();
    const cities = await service.getAllCities();
    return res.json(cities);
  }

  async getCityById(req: Request, res: Response) {
    const { id } = req.params;
    const service = new CityService();
    const city = await service.getCityById(Number(id));
    if (city) {
      return res.json(city);
    } else {
      return res.status(404).json({ message: "City not found" });
    }
  }
}