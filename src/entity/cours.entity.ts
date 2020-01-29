import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cours')
export class Cours {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'int', length: 2, nullable: false})
    idDiscipline!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    name!: string;

    @Column({type: 'varchar', length: 150, nullable: false})
    description!: string;

    @Column({type: 'int', length: 3, nullable: false})
    durée!: number;

    @Column({type: 'int', length: 2, nullable: false})
    capacity!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    formateurName!: string;

    @Column({type: 'date', length: 20, nullable: false})
    date!: string;

    @Column({type: 'time', length: 20, nullable: false})
    time!: string;

    @Column({type: 'varchar', length: 30, nullable: false})
    lieu!: string;

}
