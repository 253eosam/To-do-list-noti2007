import { Header } from "./Header.js";
import { Workspace } from "./Workspace.js";
import { Input } from "./Input.js";
import { Footer } from "./Footer.js";
import { Workspace as WorkspaceModel } from "@/models/todo/Workspace.js";

export class ToDo {
  constructor() {
    const $target = document.createElement("section");
    $target.id = "todo_wrap";
    this.$target = $target;

    const mock_data = new WorkspaceModel({
      id: 1,
      title: "Test work space title",
      users: ["A User", "B User"],
    });
    const { users } = mock_data;

    new Header({ $target, mock_data });
    users.forEach((user) => new Workspace({ $target, user }));
    new Input({ $target });
    new Footer({ $target });
  }

  getNode() {
    return this.$target;
  }
}
