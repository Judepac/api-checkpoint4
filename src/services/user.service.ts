import { UserRepository } from '../repository/user.repository';
import { User } from '../entity/user.entity';
import { getCustomRepository } from 'typeorm';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class UserService {

    private repository = getCustomRepository(UserRepository);

    // Business logic
    async getAll() {
        return await this.repository.find();
    }

    async getTeam() {
        return await this.repository.find({ role: 'admin'});
    }

    async create(user: User) {
        user = this.repository.create(user);
        return await this.repository.save(user);
    }
    async update(user: User) {
        const id = user.id;
        return await this.repository.update( id, user);
    }

}
