import { SessionFactory } from './factory/SessionFactory';

/* @TODOS : session manager 관심사 분리 필요 */
export class SessionManager {
  session: Map<string, string>;
  sessionStrategy: SessionFactory;
  selectedSession: string;

  constructor(session: string) {
    this.selectedSession = session;
  }

  add(key: string, value: string) {
    this.session.set(key, value);
  }

  put(key: string, value: string) {
    this.add(key, value);
  }

  remove(key: string) {
    this.session.delete(key);
  }

  printSession() {
    console.log(this.session);
  }
}
