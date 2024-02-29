import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bicycle {
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
