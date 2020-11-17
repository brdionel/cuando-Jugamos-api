import { Body, Controller, Get, Post, Res, NotFoundException, HttpStatus, Param, Delete, Put } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { CreateJogo } from './dto/create-jogo.dto'

@Controller('jogos')
export class JogosController {

    constructor(private jogosService:JogosService){};

    @Get()
    async getJogos(@Res() res){
        const jogos = await this.jogosService.getJogos()
        if(!jogos) throw new NotFoundException('Could not obtain partidos')
        return res.status(HttpStatus.OK).json({
            message: `jogos encontrados:  ${jogos.length}`,
            jogos
        })
    }

    @Get(':idTime')
    async getJogosById(@Res() res, @Param('idTime') idTime){
        const jogos = await this.jogosService.getJogosById(idTime)
        if(!jogos) if(!jogos) throw new NotFoundException('Could not obtain partidos')
        return res.status(HttpStatus.OK).json({
            message: `jogos encontrados:  ${jogos.length}`,
            jogos
        })
    }

    @Post()
    async createJogo(@Res() res, @Body() jogo: CreateJogo){ 
        console.log(jogo)
        const newJogo =  await this.jogosService.createJogo(jogo)
        if(!newJogo) throw new NotFoundException('No se pudo crear el partido')
        return res.status(HttpStatus.OK).json({
            message: 'Jogo creado',
            newJogo

        })
    }

    @Delete(':idJogo')
    async deleteJogo(@Res() res, @Param('idJogo') idJogo){
        const deletedJogo = await this.jogosService.deleteJogo(idJogo);
        if(!deletedJogo) throw new NotFoundException('No se pudo eliminar el partido')
        return res.status(HttpStatus.OK).json({
            message: 'Jogo eliminado',
            deletedJogo
        })
    }

    @Put(':idJogo')
    async updateJogo(@Res() res, @Param('idJogo') idJogo, @Body() jogo: CreateJogo){
        const updateJogo =  await this.jogosService.updateJogo(idJogo, jogo)
        if(!updateJogo) throw new NotFoundException('No se pudo actualizar el partido')
        return res.status(HttpStatus.OK).json({
            message: 'Jogo actualizado',
            updateJogo
        })
    }
} 
