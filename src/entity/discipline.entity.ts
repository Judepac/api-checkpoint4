import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('discipline')
export class Discipline {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'int', nullable: false})
    idCategorie!: number;

    @Column({type: 'varchar', length: 40, nullable: false})
    name!: string;

    @Column({type: 'boolean', nullable: false})
    tarif!: boolean;

}
