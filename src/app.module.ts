import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimesModule } from './times/times.module';
import { JogosModule } from './jogos/jogos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CampeonatoModule } from './campeonato/campeonato.module';
import { ReminderController } from './reminder/reminder.controller';
import { ReminderService } from './reminder/reminder.service';
import { ReminderModule } from './reminder/reminder.module';

@Module({
  imports: [TimesModule, JogosModule, MongooseModule.forRoot('mongodb+srv://brdionel:FERRErj11@cluster0.h3vtk.mongodb.net/nest-times'), 
    CampeonatoModule, ReminderModule],
  controllers: [AppController, ReminderController],
  providers: [AppService, ReminderService],
})
export class AppModule {}