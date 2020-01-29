import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn({ type: 'int'})
    id!: number;

    @Column({type: 'varchar', length: 25, nullable: false})
    firstname!: string;

    @Column({type: 'varchar', length: 15, nullable: false})
    lastname!: string;

    @Column({type: 'int', nullable: false})
    age!: number;

    @Column({type: 'varchar', length: 10, nullable: false})
    phone!: string;

    @Column({type: 'varchar', length: 40, nullable: false})
    email!: string;

    @Column({type: 'varchar', length: 15, nullable: true})
    password!: string;

    @Column({type: 'varchar', length: 15, nullable: false, default: 'visiteur'})
    role!: string;

}
