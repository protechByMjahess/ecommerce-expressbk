import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Post } from './post.entity';

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

  @Column({nullable:false, default:'123456'})
  password!: string;

  @Column({nullable:true})
  email!: string;

  @OneToMany(()=>Post,(post)=>post.user)
  posts!:Post[]
}
