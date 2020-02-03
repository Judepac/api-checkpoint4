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

    async verify(user: User) {
        const password = user.password;
        const email = user.email;
        const error = new Error('Invalid credentials');
        const currentUser = await this.repository.findOne({password, email});
        if (!user) {
            throw error;
        }
        if (user.password !== currentUser?.password || user.email !== currentUser.email) {
            throw error;
        }

        const userVerified = {id: currentUser.id, firstname: currentUser.firstname,
                              lastname: currentUser.lastname, age: currentUser.age, image: currentUser.image,
                              role: currentUser.role, citation: currentUser.citation, domaine: currentUser.domaine};

        return userVerified;
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
    async delete(userId: number | number[]) {
        return await this.repository.delete(userId);
    }

}
