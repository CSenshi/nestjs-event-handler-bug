import { AggregateRoot } from '@nestjs/cqrs';

export class HeroKilledDragonEvent {}

export class Hero extends AggregateRoot {
  killEnemy() {
    this.apply(new HeroKilledDragonEvent());
  }
}
