import { Controller, Get, Post, Body, Delete, Param, Put, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { CreateTimeDTO } from './dto/create-time.dto';
import { Time } from './interfaces/Time';
import { TimesService } from './times.service'

@Controller('times')
export class TimesController {

    constructor(private timesService: TimesService){}

    @Get() 
    async getTimes(@Res() res): Promise<Time[]> {
        const times = await this.timesService.getTimes();
        return res.status(HttpStatus.OK).json({
            times
        })
    };

    @Get('/:id')
    async getTime(@Param('id') id, @Res() res): Promise<Time> {
        const time = await this.timesService.getTime(id);
        if(!time) throw new NotFoundException('Product does not exists');
        return res.status(HttpStatus.OK).json({
            time
        })
    };

    @Post()
    async createTime(@Res() res, @Body() time: CreateTimeDTO) { 
        const newTime = await this.timesService.createTime(time);
        return res.status(HttpStatus.OK).json({
            message: 'Time Succesfully Created',
            time: newTime
        })
    };

    @Delete('/:id')
    async deleteTime(@Param('id') id, @Res() res){
        console.log('el query que llega: '+id)
        const timeDeleted = await this.timesService.deleteTime(id)
        if(!timeDeleted) throw new NotFoundException('Product does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Time Deleted Succesfully',
            timeDeleted
        })
    }

    @Put(':id')
    async updateTime(@Res() res, @Body() time: CreateTimeDTO, @Param('id') id){
        console.log(time)
        console.log(id)
        const timeUpdated = await this.timesService.updateTime(id, time);
        if(!timeUpdated) throw new NotFoundException('Product does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Time update Succesfully',
            timeUpdated
        })
    }
}
