import express, { Router, Request, Response, Application } from 'express';
import { UserService } from '../services/user.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controlle rest la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const UserController = (app: Application) => {

    const userRouter: Router = express.Router();
    const userService = new UserService();

    userRouter.get('/', async (req: Request, res: Response) => {
        res.send(await userService.getAll());
    });

    userRouter.get('/formateur', async (req: Request, res: Response) => {
        res.send(await userService.getTeam());
    });

    userRouter.post('/signup', async (req: Request, res: Response) => {
        const user = req.body;
        try {
            res.send(await userService.verify(user));
        } catch (error) {
            res.sendStatus(409).send('Erreur identification');
        }
    });

    userRouter.post('/', async (req: Request, res: Response) => {
        const user = req.body;
        res.send(await userService.create(user));
    });
    userRouter.put('/', async (req: Request, res: Response) => {
        const user = req.body;
        res.send(await userService.update(user));
    });
    userRouter.delete('/', async (req: Request, res: Response) => {
        const user = req.body;
        res.send(await userService.delete(user));
    });

    app.use('/user', userRouter);
};
