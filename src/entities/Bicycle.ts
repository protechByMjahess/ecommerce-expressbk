import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('bicyclessssssss')
export class Bicycle extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  description!: string;

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
