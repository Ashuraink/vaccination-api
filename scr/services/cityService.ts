import { getRepository } from "typeorm";
import { City } from "../entities/City";

export class CityService {
  async getAllCities() {
    const cityRepo = getRepository(City);
    return await cityRepo.find();
  }

  async getCityById(id: number) {
    const cityRepo = getRepository(City);
    return await cityRepo.findOne(id);
  }
}