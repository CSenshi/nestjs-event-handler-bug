import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HeroKilledDragonHandler } from './hero-killed-dragon.event-handler';
import { TaskService } from './hero.cron';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [ScheduleModule.forRoot(), CqrsModule],
  controllers: [],
  providers: [TaskService, HeroKilledDragonHandler],
})
export class AppModule {}
