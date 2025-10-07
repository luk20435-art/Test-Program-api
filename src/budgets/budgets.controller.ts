import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { Budget } from './entities/budget.entity';

@Controller('budgets')
export class BudgetsController {
    constructor(private readonly service: BudgetsService) { }

    @Get()
    findAll(): Promise<Budget[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<any> {
        return this.service.findOne(id);
    }

    @Post()
    create(@Body() data: Partial<any>) {
        const year = new Date(data?.date).getFullYear(); 
        data.year = year;
        return this.service.create(data);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Partial<Budget>) {
        return this.service.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(id);
    }
}
