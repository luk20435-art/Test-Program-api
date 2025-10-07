import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<any> {
        return this.usersService.findOne(id);
    }

    @UseGuards(LocalAuthGuard)
    @Post()
    create(@Body() data: Partial<User>) {
        console.log(data);
        return this.usersService.create(data);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Partial<User>) {
        return this.usersService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }
}
