import {Component} from '@angular/core';
import {Model} from "./models/model";
import {TodoItem} from "./models/todo-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem) {
    if (newItem != "") {
      return this.model.items.push(new TodoItem(newItem, false));
    }
  }
}
