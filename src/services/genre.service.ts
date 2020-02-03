import { getCustomRepository } from 'typeorm';
import { GenreRepository } from '../repository/genre.repository';
import { Genre } from '../entity/genre.entity';
import { CategorieRepository } from '../repository/categorie.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class GenreService {

    private repository = getCustomRepository(GenreRepository);

    // Business logic
    async getAll() {
       return await this.repository.find({relations: ['disciplines', 'disciplines.categorie']});
    }

    async create(genre: Genre) {
        genre = this.repository.create(genre);
        return await this.repository.save(genre);
    }
    async update(genre: Genre) {
        const id = genre.id;
        return await this.repository.update( id, genre);
    }

}
