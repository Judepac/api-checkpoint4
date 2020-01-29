import { Discipline } from './../entity/discipline.entity';
import { getCustomRepository } from 'typeorm';
import { DisciplineRepository } from '../repository/discipline.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class DisciplineService {

    private repository = getCustomRepository(DisciplineRepository);

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    async create(discipline: Discipline) {
        discipline = this.repository.create(discipline);
        return await this.repository.save(discipline);
    }

    async update(discipline: Discipline) {
        const id = discipline.id;
        return await this.repository.update( id, discipline);
    }

}
