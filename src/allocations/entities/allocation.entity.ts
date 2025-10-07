import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Expense } from '../../expenses/entities/expense.entity';
import { Department } from '../../departments/entities/department.entity';
import { User } from '../../users/entities/user.entity';

@Entity('allocations')
export class Allocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Expense, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'expense_id' })
  expense: Expense;

  @ManyToOne(() => Department, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'target_department_id' })
  targetDepartment: Department;

  @Column('decimal', { precision: 5, scale: 2 })
  ratio: number;

  @Column('decimal', { precision: 12, scale: 2 })
  allocated_amount: number;

  @Column({ nullable: true })
  method: string;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'created_by' })
  createdBy: User;
}
