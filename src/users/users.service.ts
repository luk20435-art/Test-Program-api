import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ) { }

    findAll() {
        return this.userRepo.find({ relations: ['department'] });
    }

    findOne(id: string) {
        return this.userRepo.findOne({ where: { id }, relations: ['department'] });
    }

    async findByEmail(email: string) {
        return this.userRepo.findOne({ where: { email } });
    }

    async create(data: Partial<User>) {
        const hashed = await bcrypt.hash(data.passwordHash, 10);
        const user = this.userRepo.create({ ...data, passwordHash: hashed });
        return this.userRepo.save(user);
    }

    async update(id: string, data: Partial<User>) {
        await this.userRepo.update(id, data);
        return this.findOne(id);
    }

    async remove(id: string) {
        await this.userRepo.delete(id);
        return { deleted: true };
    }
}
