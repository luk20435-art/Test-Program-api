import { Budget } from 'src/budgets/entities/budget.entity';
import { Expense } from 'src/expenses/entities/expense.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'; 

@Entity('cost_categories')
export class CostCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string; // 'direct' or 'indirect'

  @OneToMany(() => Budget, (budget) => budget.category)
  budgets: Budget[];

  @OneToMany(() => Expense, (expense) => expense.category)
  expenses: Expense[];
}
