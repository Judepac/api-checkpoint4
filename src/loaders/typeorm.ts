import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';
import { Cours } from '../entity/cours.entity';
import { Discipline } from '../entity/discipline.entity';
import { Categorie } from '../entity/categorie.entity';
import { Genre } from '../entity/genre.entity';

export default async () => {

await createConnection({
    type: 'mysql',
    host: process.env.CHECKPOINT_HOST,
    // port: parseInt(process.env.CHECKPOINT_DB_PORT || '3306', 10),
    username: process.env.CHECKPOINT_USER,
    password: process.env.CHECKPOINT_PASSWORD,
    database: process.env.CHECKPOINT_DATABASE,
    entities: [
        User,
        Cours,
        Discipline,
        Categorie,
        Genre,
    ],
    synchronize: true,
});
};
