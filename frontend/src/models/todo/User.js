export class User {
  constructor({ id, name, todos }) {
    this.id = id;
    this.name = name;
    this.todos = todos;
  }

  addToDo(toDo) {
    this.todos.push(toDo);
  }
}
