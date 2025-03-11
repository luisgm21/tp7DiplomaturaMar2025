import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export async function obtenerSuperHeroePorId(id) {
    return await SuperHeroRepository.obtenerporId(id);
}

export async function obtenerTodosLosSuperHeroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperHeroesPorAtributo(atributo, value) {
    return await SuperHeroRepository.buscarPorAtributo(atributo, value);
}

export async function obtenerSuperHeroesMayoresDe30() {
    return await SuperHeroRepository.obtenerMayoresDe30();
}