// myCarte.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity('myCarteLaster')
export class myCarte extends BaseEntity {
  @PrimaryColumn()
  id!: number;
  
  

  // @Column()
  // unique!: string;

  

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
