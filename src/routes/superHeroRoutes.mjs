import express from 'express';
import { obtenerSuperHeroePorIdController,
    buscarSuperHeroesPorAtributoController,
    obtenerSuperHeroesMayoresDe30Controller,
    obtenerTodosLosSuperHeroesController 
} from '../controllers/superheroesController.mjs';

const  router = express.Router();

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/mayores-30', obtenerSuperHeroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:value', buscarSuperHeroesPorAtributoController);

export default router;
