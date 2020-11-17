import { Controller, Get, Post, Body, Delete, Param, Put, Res, HttpStatus, NotFoundException, Query  } from '@nestjs/common';
import { CreateCampeonatoDTO } from './dto/create-campeonato.dto';
import { Campeonato } from './interfaces/Campeonato';
import { CampeonatoService } from './campeonato.service'

@Controller('campeonato')
export class CampeonatoController {

    constructor(private campeonatoService: CampeonatoService){}

    @Get()
    async getCampeonatos(@Res() res): Promise<Campeonato[]> {
        const campeonatos = await this.campeonatoService.getCampeonatos();
        return res.status(HttpStatus.OK).json({
            campeonatos
        })
    };

    @Get('/:id')
    async getCampeonato(@Param('id') id, @Res() res): Promise<Campeonato> {
        const campeonato = await this.campeonatoService.getCampeonato(id);
        if(!campeonato) throw new NotFoundException('Campeonato does not exists');
        return res.status(HttpStatus.OK).json({
            campeonato
        })
    };

    @Post()
    async createCampeonato(@Res() res, @Body() campeonato: CreateCampeonatoDTO) { 
        const newCampeonato = await this.campeonatoService.createCampeonato(campeonato)
        return res.status(HttpStatus.OK).json({
            message: 'Campeonato Succesfully Created',
            campeonato: newCampeonato
        })    
        
    };

    @Delete(':id')
    async deleteCampeonato(@Res() res, @Param('id') id){
        const campeonatoDeleted = await this.campeonatoService.deleteCampeonato(id)
        if(!campeonatoDeleted) throw new NotFoundException('Campeonato does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Campeonato Deleted Succesfully',
            campeonatoDeleted
        })
    }

    @Put(':id')
    async updateCampeonato(@Res() res, @Body() campeonato: CreateCampeonatoDTO, @Param('id') id){
        const campeonatoUpdated = await this.campeonatoService.updateCampeonato(id, campeonato);
        if(!campeonatoUpdated) throw new NotFoundException('Campeonato does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Campeonato update Succesfully',
            campeonatoUpdated
        })
    }

}
