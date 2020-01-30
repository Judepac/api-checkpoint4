import express, { Router, Request, Response, Application } from 'express';
import { CoursService } from '../services/cours.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const CoursController = (app: Application) => {

    const coursRouter: Router = express.Router();
    const coursService = new CoursService();

    coursRouter.get('/', async (req: Request, res: Response) => {
        res.send(await coursService.getAll());
    });

    coursRouter.post('/', async (req: Request, res: Response) => {
        const cours = req.body;
        res.send(await coursService.create(cours));
    });

    coursRouter.post('/', async (req: Request, res: Response) => {
        const cours = req.body;
        res.send(await coursService.save(cours));
    });

    app.use('/cours', coursRouter);
};
