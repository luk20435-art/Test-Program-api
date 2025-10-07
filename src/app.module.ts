import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DepartmentsModule } from './departments/departments.module';
import { Department } from './departments/entities/department.entity';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { CostCategoriesModule } from './cost-categories/cost-categories.module';
import { BudgetsModule } from './budgets/budgets.module';
import { ExpensesModule } from './expenses/expenses.module';
import { AllocationsModule } from './allocations/allocations.module';
import { CostCategory } from './cost-categories/entities/cost-category.entity';
import { Budget } from './budgets/entities/budget.entity';
import { Expense } from './expenses/entities/expense.entity';
import { Allocation } from './allocations/entities/allocation.entity';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        User, 
        Department, 
        CostCategory,
        Budget,
        Expense,
        Allocation
      ],
      synchronize: true, // ❗ ใช้เฉพาะตอน dev เท่านั้น
    }),
    UsersModule,
    DepartmentsModule,
    AuthModule,
    CostCategoriesModule,
    BudgetsModule,
    ExpensesModule,
    AllocationsModule,
  ],
})
export class AppModule { }
