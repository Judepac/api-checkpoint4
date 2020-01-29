import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cours')
export class Cours {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'int', nullable: false})
    idDiscipline!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    name!: string;

    @Column({type: 'varchar', length: 150, nullable: false})
    description!: string;

    @Column({type: 'int', nullable: false})
    durée!: number;

    @Column({type: 'int', nullable: false})
    capacity!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    formateurName!: string;

    @Column({type: 'date', nullable: false})
    date!: string;

    @Column({type: 'time', nullable: false})
    time!: string;

    @Column({type: 'varchar', length: 30, nullable: false})
    lieu!: string;

}
