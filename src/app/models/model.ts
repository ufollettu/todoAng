import {TodoItem} from "./todo-item";

export class Model {
  user: string;
  items;

  constructor() {
    this.user = "pinuccio";
    this.items = [
      new TodoItem("buy time", false),
      new TodoItem("get angry", false),
      new TodoItem("collect money", false),
      new TodoItem("call grog", false)
    ]
  }
}
