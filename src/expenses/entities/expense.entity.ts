import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Department } from '../../departments/entities/department.entity';
import { CostCategory } from '../../cost-categories/entities/cost-category.entity';
import { User } from '../../users/entities/user.entity'; 
import { Allocation } from 'src/allocations/entities/allocation.entity';

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Department, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @ManyToOne(() => CostCategory, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'category_id' })
  category: CostCategory;

  @Column({ nullable: true })
  vendor: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'date' })
  date: Date;

  @Column('decimal', { precision: 12, scale: 2 })
  amount: number;

  @Column({ default: 'THB' })
  currency: string;

  @Column({ nullable: true })
  invoice_no: string;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'created_by' })
  createdBy: User;

  @Column({ default: 'posted' })
  status: string;

  @OneToMany(() => Allocation, (alloc) => alloc.expense)
  allocations: Allocation[];

  @CreateDateColumn()
  created_at: Date;
}
