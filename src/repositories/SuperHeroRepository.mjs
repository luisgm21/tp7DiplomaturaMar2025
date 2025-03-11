import SuperHero from "../models/superHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroRepository extends IRepository {
    async obtenerporId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find();
    }

    async buscarPorAtributo(atributo, value) {
        return await SuperHero.find({ [atributo]: value });
    }

    async obtenerMayoresDe30() {
        return await SuperHero.find({ edad: { $gt: 30 } });
    }
}
export default new SuperHeroRepository();