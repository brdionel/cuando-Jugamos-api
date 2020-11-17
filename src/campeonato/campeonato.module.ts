import { Module } from '@nestjs/common';
import { CampeonatoService } from './campeonato.service';
import { CampeonatoController }  from './campeonato.controller'
import { CampeonatoSchema } from './schemas/campeonato.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [MongooseModule.forFeature([
        {name: 'Campeonato', schema: CampeonatoSchema}
    ])],
    controllers: [CampeonatoController],
    providers: [CampeonatoService]
})
export class CampeonatoModule {}
