import { User } from './../entity/user.entity';
import { Cours } from './../entity/cours.entity';
import { getCustomRepository } from 'typeorm';
import { CoursRepository } from '../repository/cours.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class CoursService {

    private repository = getCustomRepository(CoursRepository);

    // Business logic
    async getAll() {
        return await this.repository.find({relations: ['disciplines', 'users']});
    }

    async create(cours: Cours) {
        cours = this.repository.create(cours);
        return await this.repository.save(cours);
    }

    async save(cours: Cours) {
        return await this.repository.save(cours);
    }

    async update(cours: Cours) {
        const id = cours.id;
        return await this.repository.update( id, cours);
    }

    async newUpdate(coursID: number, user: User) {
        const cours = await this.repository.findOne({id: coursID }, {relations: ['disciplines', 'users']});
        const arrayUser = cours?.users;

        arrayUser?.push(user);
        if (cours !== undefined) {
            return await this.repository.save(cours);
        }
    }

}
