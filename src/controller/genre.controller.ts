import express, { Router, Request, Response, Application } from 'express';
import { GenreService } from '../services/genre.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const GenreController = (app: Application) => {

    const genreRouter: Router = express.Router();
    const genreService = new GenreService();

    genreRouter.get('/', async (req: Request, res: Response) => {
       const genres = await genreService.getAll();

       res.send(await genreService.getAll());
    });

    genreRouter.post('/', async (req: Request, res: Response) => {
        const genre = req.body;
        res.send(await genreService.create(genre));
    });

    app.use('/genre', genreRouter);
};
