import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { Department } from './entities/department.entity';

@Controller('departments')
export class DepartmentsController {
    constructor(private readonly service: DepartmentsService) { }

    @Get()
    findAll(): Promise<Department[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<any> {
        return this.service.findOne(id);
    }

    @Post()
    create(@Body() data: Partial<Department>) {
        return this.service.create(data);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Partial<Department>) {
        return this.service.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(id);
    }
}
