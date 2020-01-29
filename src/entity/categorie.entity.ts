import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

}
