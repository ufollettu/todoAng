export class TodoItem {
  action: string;
  done: boolean;

  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
