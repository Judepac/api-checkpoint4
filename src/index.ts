import 'reflect-metadata';

import express from 'express';
import loaders from './loaders';

import { DisciplineController } from './controller/discipline.controller';
import { UserController } from './controller/user.controller';
import { CoursController } from './controller/cours.controller';
import { CategorieController } from './controller/categorie.controller';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différent loader
    await loaders(app);

    // Ajout des différentes route de votre application
    UserController(app);
    CoursController(app);
    DisciplineController(app);
    CategorieController(app);

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server is running'));
  }

startServer();
