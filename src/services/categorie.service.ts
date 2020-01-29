import { Categorie } from './../entity/categorie.entity';
import { CategorieRepository } from '../repository/categorie.repository';
import { getCustomRepository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class CategorieService {

    private repository = getCustomRepository(CategorieRepository);

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    async create(categorie: Categorie) {
        categorie = this.repository.create(categorie);
        return await this.repository.save(categorie);
    }

}
