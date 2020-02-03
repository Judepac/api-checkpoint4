import { Categorie } from './../entity/categorie.entity';
import { CategorieRepository } from '../repository/categorie.repository';
import { getCustomRepository } from 'typeorm';
import { User } from '../entity/user.entity';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class CategorieService {

    private repository = getCustomRepository(CategorieRepository);

    // Business logic
    async getAll() {
        return await this.repository.find({relations: ['users', 'disciplines']});
    }

    async create(categorie: Categorie) {
        categorie = this.repository.create(categorie);
        return await this.repository.save(categorie);
    }

    // async verify(user: User, disciplineId: number) {
    //    const categorie = await this.repository.findOne({disciplines: [{id: disciplineId}]});
    //    const debut = categorie?.ageStart;
    //    const fin = categorie?.ageEnd;
    //    const age = user.age;
    //    if (debut !== undefined && fin !== undefined) {
    //      if ( debut < age && age < fin) {
    //    return true;
    //    }
    //     }
    // }

}
