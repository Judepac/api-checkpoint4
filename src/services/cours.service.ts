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
        return await this.repository.find();
    }

    async create(cours: Cours) {
        cours = this.repository.create(cours);
        return await this.repository.save(cours);
    }

}
