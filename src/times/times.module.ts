import { Module } from '@nestjs/common';
import { TimesService } from './times.service';
import { TimesController }  from './times.controller'
import { TimeSchema } from './schemas/time.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [MongooseModule.forFeature([
        {name: 'Time', schema: TimeSchema}
    ])],
    controllers: [TimesController],
    providers: [TimesService]
})
export class TimesModule {}
