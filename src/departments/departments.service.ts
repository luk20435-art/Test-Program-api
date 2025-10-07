import { Injectable } from '@nestjs/common';
import { Department } from './entities/department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
    constructor(
        @InjectRepository(Department)
        private readonly repo: Repository<Department>,
    ) { }

    findAll() {
        return this.repo.find({ relations: ['users'] });
    }

    findOne(id: string) {
        return this.repo.findOne({ where: { id }, relations: ['users'] });
    }

    create(data: Partial<Department>) {
        const entity = this.repo.create(data);
        return this.repo.save(entity);
    }

    async update(id: string, data: Partial<Department>) {
        await this.repo.update(id, data);
        return this.findOne(id);
    }

    remove(id: string) {
        return this.repo.delete(id);
    }
}
