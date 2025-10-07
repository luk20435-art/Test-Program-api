import { Injectable } from '@nestjs/common';
import { CostCategory } from './entities/cost-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CostCategoriesService {

    constructor(
        @InjectRepository(CostCategory)
        private readonly repo: Repository<CostCategory>,
    ) { }

    findAll() {
        return this.repo.find({ relations: ['budgets', 'expenses'] });
    }

    findOne(id: any) {
        return this.repo.findOne({
            where: { id }, 
            relations: ['budgets', 'expenses'] 
        });
    }

    create(data: Partial<CostCategory>) {
        const entity = this.repo.create(data);
        return this.repo.save(entity);
    }

    async update(id: string, data: Partial<CostCategory>) {
        await this.repo.update(id, data);
        return this.findOne(id);
    }

    remove(id: string) {
        return this.repo.delete(id);
    }
}
