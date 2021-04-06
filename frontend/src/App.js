import { Header } from "@/components/main/Header.js";
import { Modal } from "@/components/main/Modal.js";
import { ToDo } from "@/components/todo/ToDo.js";

export class App {
  constructor($target) {
    this.$target = $target;

    const $modalToggle = document.createElement("input");
    $modalToggle.type = "checkbox";
    $modalToggle.id = "toggle";

    const $wrap = document.createElement("div");
    $wrap.id = "wrap";
    this.$header = new Header({ $wrap });
    this.$modal = new Modal({ $wrap });
    this.$toDo = new ToDo();
    $wrap.appendChild(this.$toDo.getNode());

    this.$target.appendChild($modalToggle);
    this.$target.appendChild($wrap);
  }
}
