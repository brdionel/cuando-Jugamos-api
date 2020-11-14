import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimesModule } from './times/times.module';
import { JogosModule } from './jogos/jogos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ReminderModule } from './reminder/reminder.module';

@Module({
  imports: [TimesModule, JogosModule, MongooseModule.forRoot('mongodb://localhost/nest-times'), ReminderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
