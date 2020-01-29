import { Discipline } from './discipline.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';

@Entity('categorie')
export class Categorie {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    name!: string;

    @Column({type: 'int', nullable: false})
    ageStart!: number;

    @Column({type: 'int', nullable: false})
    ageEnd!: number;

    @OneToMany(type => Discipline, discipline => discipline.categorie)
    disciplines!: Discipline[];

    @ManyToMany(type => User)
    @JoinTable()
    users!: User[];

}
