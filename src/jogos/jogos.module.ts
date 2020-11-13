import { Module } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { JogosController }  from './jogos.controller'
import { JogoSchema } from './schemas/jogo.schema'
import { TimeSchema } from '../times/schemas/time.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [MongooseModule.forFeature([
        {name: 'Jogo', schema: JogoSchema}, 
        {name: 'Time', schema: TimeSchema}, 
    ])],
    controllers: [JogosController],
    providers: [JogosService]
})
export class JogosModule {}
