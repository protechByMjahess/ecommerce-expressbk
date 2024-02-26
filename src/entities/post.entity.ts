import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity('posts')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({nullable:false,default:'new user'})
  title!: string;

  @Column({nullable:false})
  content!: string;

  @ManyToOne(()=>User, (user)=>user.posts)
  user!:User
  
}
