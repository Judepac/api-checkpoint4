import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('discipline')
export class Discipline {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'int', length: 2, nullable: false})
    idCategorie!: number;

    @Column({type: 'varchar', length: 40, nullable: false})
    name!: string;

    @Column({type: 'boolean', length: 2, nullable: false})
    tarif!: boolean;

}
