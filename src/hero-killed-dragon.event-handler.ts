import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HeroKilledDragonEvent } from './hero.entity';

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler
  implements IEventHandler<HeroKilledDragonEvent>
{
  private readonly logger = new Logger(HeroKilledDragonHandler.name);

  handle(event: HeroKilledDragonEvent) {
    this.logger.debug(
      `handling HeroKilledDragonEvent: ${JSON.stringify(event)} `,
    );

    throw new Error('Should be thrown only once');
  }
}
