import { Module } from '@nestjs/common';
import { CostCategoriesService } from './cost-categories.service';
import { CostCategoriesController } from './cost-categories.controller';
import { CostCategory } from './entities/cost-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CostCategory])],
  providers: [CostCategoriesService],
  controllers: [CostCategoriesController]
})
export class CostCategoriesModule {}
