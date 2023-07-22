import { CronExpression } from '@nestjs/schedule';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EventPublisher } from '@nestjs/cqrs';
import { Hero } from './hero.entity';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(private publisher: EventPublisher) {}

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    this.logger.debug('Called');

    const hero = this.publisher.mergeObjectContext(new Hero());

    hero.killEnemy();

    hero.commit();
  }
}
