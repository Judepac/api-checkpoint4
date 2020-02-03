import { Categorie } from './../entity/categorie.entity';
import express, { Router, Request, Response, Application } from 'express';
import { CoursService } from '../services/cours.service';
import { UserService } from '../services/user.service';
import { CategorieService } from '../services/categorie.service';

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
    const userService = new UserService();
    const categorieService = new CategorieService();

    coursRouter.get('/', async (req: Request, res: Response) => {
        res.send(await coursService.getAll());
    });

    coursRouter.post('/', async (req: Request, res: Response) => {
        const cours = req.body;
        res.send(await coursService.create(cours));
    });

    coursRouter.post('/initiation', async (req: Request, res: Response) => {
        let user = req.body.reservation;
        const coursId = req.body.coursId;

        user = await userService.create(user);
        try {
            res.send(await coursService.newUpdate(coursId, user));
        } catch (error) {
            throw new Error('Discicpline non trouvée.');
        }

    });

    app.use('/cours', coursRouter);
};
