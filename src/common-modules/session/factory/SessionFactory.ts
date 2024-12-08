import { SessionLocal } from './SessionLocal';

export class SessionFactory {
  sessionFactory: string;

  concreteSessionStorage(factory: string) {
    if (factory == 'local') {
      return new SessionLocal();
    }
  }
}
