import { createConnection } from 'typeorm';
import { User } from '../entity/user.entity';
import { Cours } from '../entity/cours.entity';

export default async () => {

await createConnection({
    type: 'mysql',
    host: process.env.CHECKPOINT_HOST,
    port: parseInt(process.env.CHECKPOINT_DB_PORT || '3306', 10),
    username: process.env.CHECKPOINT_USER,
    password: process.env.CHECKPOINT_PASSWORD,
    database: process.env.CHECKPOINT_DATABASE,
    entities: [
        User,
        Cours,
    ],
    synchronize: true,
});
};
