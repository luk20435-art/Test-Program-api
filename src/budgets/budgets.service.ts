import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Budget } from './entities/budget.entity';

@Injectable()
export class BudgetsService {
    constructor(
        @InjectRepository(Budget)
        private readonly repo: Repository<Budget>,
    ) { }

    findAll() {
        return this.repo.find({ relations: ['department', 'category'] });
    }

    findOne(id: string) {
        return this.repo.findOne({ where: { id }, relations: ['department', 'category'] });
    }

    create(data: Partial<Budget>) {
        const entity = this.repo.create(data);
        return this.repo.save(entity);
    }

    async update(id: string, data: Partial<Budget>) {
        await this.repo.update(id, data);
        return this.findOne(id);
    }

    remove(id: string) {
        return this.repo.delete(id);
    }
}
