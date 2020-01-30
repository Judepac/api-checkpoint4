import { Discipline } from './discipline.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('genre')
export class Genre {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 45, nullable: false})
    name!: string;

    @OneToMany(type => Discipline, discipline => discipline.genre)
    disciplines!: Discipline[];
}
