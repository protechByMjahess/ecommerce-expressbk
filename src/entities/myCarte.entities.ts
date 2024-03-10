// myCarte.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('myCartee')
export class myCarte extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: string;

  @Column()
  description!: string;

  @Column()
  quantity!: string;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  imageUrl!: string;

  @Column('simple-array')
  imageSwiper!: string[];

  @Column()
  size!: string;

  @Column()
  condition!: string;

  @Column()
  age!: string;
}
