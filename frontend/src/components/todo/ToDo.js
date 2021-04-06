import { Header } from "./Header.js";
import { Workspace } from "./Workspace.js";
import { Input } from "./Input.js";
import { Footer } from "./Footer.js";

export class ToDo {
  constructor() {
    const $target = document.createElement("section");
    $target.id = "todo_wrap";
    this.$target = $target;

    new Header({ $target });
    new Workspace({ $target });
    new Input({ $target });
    new Footer({ $target });
  }

  getNode() {
    return this.$target;
  }
}
