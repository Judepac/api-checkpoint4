import express, { Router, Request, Response, Application } from 'express';
import { CategorieService } from '../services/categorie.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const CategorieController = (app: Application) => {

    const categorieRouter: Router = express.Router();
    const categorieService = new CategorieService();

    categorieRouter.get('/', async (req: Request, res: Response) => {
        res.send(await categorieService.getAll());
    });

    categorieRouter.post('/', async (req: Request, res: Response) => {
        const categorie = req.body;
        res.send(await categorieService.create(categorie));
    });

    app.use('/categorie', categorieRouter);
};
