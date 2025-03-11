import exp from "node:constants";
import { obtenerSuperHeroePorId,buscarSuperHeroesPorAtributo,obtenerSuperHeroesMayoresDe30,obtenerTodosLosSuperHeroes } from "../services/superheroesService.mjs";
import { renderizarSuperHeroe,renderizarSuperHeroes } from "../views/responseView.mjs";

export async function obtenerSuperHeroePorIdController(req ,res) {

    try {
        const { id } = req.params;
        const superHeroe = await obtenerSuperHeroePorId(id);
        if(!superHeroe) return res.status(404).json({message: 'Super Heroe no encontrado'});

        const superHeroeFormateado = renderizarSuperHeroe(superHeroe);

        res.status(200).json(superHeroeFormateado);
    } catch (error) {
        res.status(500).send({mensaje: 'Error al obtener el super heroe', error: error.message});
    }
}

export async function obtenerTodosLosSuperHeroesController(req ,res) {
    
    try {
        const superHeroes = await obtenerTodosLosSuperHeroes();
    
        const superHeroesFormateados = renderizarSuperHeroes(superHeroes);

        res.status(200).json(superHeroesFormateados);
    } catch (error) {
        res.status(500).send({mensaje: 'Error al obtener los super heroes', error: error.message});
    }
}

export async function buscarSuperHeroesPorAtributoController(req ,res) {
    
    try {
        const { atributo, value } = req.params;
        const superHeroes = await buscarSuperHeroesPorAtributo(atributo, value);
        if(superHeroes.length === 0) return res.status(404).json({mensaje: 'No hay super heroes con ese atributo'});

        const superHeroesFormateados = renderizarSuperHeroes(superHeroes);

        res.status(200).json(superHeroesFormateados);
    } catch (error) {
        res.status(500).send({mensaje: 'Error al obtener los super heroes', error: error.message});
    }
}

export async function obtenerSuperHeroesMayoresDe30Controller(req ,res) {
    
    try {
        const superHeroes = await obtenerSuperHeroesMayoresDe30();
        if(superHeroes.length === 0) return res.status(404).json({message: 'No se encontraron super heroes mayores de 30'});

        const superHeroesFormateados = renderizarSuperHeroes(superHeroes);

        res.status(200).json(superHeroesFormateados);
    } catch (error) {
        res.status(500).send({mensaje: 'Error al obtener los super heroes', error: error.message}); 
    }
}