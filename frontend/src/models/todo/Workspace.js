export class Workspace {
  constructor({ id, title, users }) {
    this.id = id;
    this.title = title;
    this.users = users;
  }

  // static color = ["red", "blue", "green"];
  addUsers(users) {
    this.users = this.users.concat(users);
  }
}
