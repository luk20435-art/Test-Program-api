import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CostCategoriesService } from './cost-categories.service';
import { CostCategory } from './entities/cost-category.entity';

@Controller('cost-categories')
export class CostCategoriesController {

    constructor(private readonly service: CostCategoriesService) { }

    @Get()
    findAll(): Promise<CostCategory[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<any> {
        return this.service.findOne(id);
    }

    @Post()
    create(@Body() data: Partial<CostCategory>) {
        return this.service.create(data);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Partial<CostCategory>) {
        return this.service.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(id);
    }
}
