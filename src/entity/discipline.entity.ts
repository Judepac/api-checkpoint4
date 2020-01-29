import { Cours } from './cours.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Categorie } from './categorie.entity';

@Entity('discipline')
export class Discipline {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 40, nullable: false})
    name!: string;

    @Column({type: 'boolean', nullable: false})
    tarif!: boolean;

    @ManyToOne(type => Categorie, categorie => categorie.disciplines)
    categorie!: Categorie;

    @OneToMany(type => Cours, cours => cours.disciplines)
    cours!: Cours[];
}
