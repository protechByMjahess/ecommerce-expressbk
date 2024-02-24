import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({nullable:false,default:'new user'})
  name!: string;

  @Column({nullable:false})
  phone!: string;

  @Column({nullable:false})
  age!: string;

  @Column({nullable:true})
  email!: string;
}
