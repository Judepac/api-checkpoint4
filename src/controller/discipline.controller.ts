import express, { Router, Request, Response, Application } from 'express';
import { DisciplineService } from '../services/discipline.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const DisciplineController = (app: Application) => {

    const disciplineRouter: Router = express.Router();
    const disciplineService = new DisciplineService();

    disciplineRouter.get('/', async (req: Request, res: Response) => {
        res.send(await disciplineService.getAll());
    });

    disciplineRouter.post('/', async (req: Request, res: Response) => {
        const discipline = req.body;
        res.send(await disciplineService.create(discipline));
    });

    disciplineRouter.put('/', async (req: Request, res: Response) => {
        const discipline = req.body;
        res.send(await disciplineService.update(discipline));
    });

    app.use('/discipline', disciplineRouter);
};
