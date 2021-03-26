import { Header } from "@/components/main/Header.js";
import { Modal } from "@/components/main/Modal.js";

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

    this.$target.appendChild($modalToggle);
    this.$target.appendChild($wrap);
  }
}
