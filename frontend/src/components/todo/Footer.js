import { FooterButton as Button } from "@/components/common/FooterButton.js";

export class Footer {
  constructor({ $target }) {
    const $footer = document.createElement("footer");
    $footer.id = "todo_footer";

    const $ul = document.createElement("ul");
    const buttons = [];

    buttons.push(new Button("check-circle", "완료표시"));
    buttons[0].addId("hidden-completed-task_icon");
    buttons.push(new Button("eraser", "완료제거"));
    buttons.push(new Button("filter", "필터"));
    buttons.push(new Button("arrow-up", "위로"));

    buttons.forEach(({ id, className, text }, idx) => {
      const $li = document.createElement("li");
      if (!idx) $li.id = "hidden-completed-task_menu";

      const $button = document.createElement("button");
      $button.setAttribute("type", "button");
      $button.className = "footer_menu_btn";

      const $i = document.createElement("i");
      if (id) $i.id = id;
      $i.className = className;

      const $span = document.createElement("span");
      $span.textContent = text;

      $button.appendChild($i);
      $button.appendChild($span);
      $li.appendChild($button);
      $ul.appendChild($li);
    });

    $footer.appendChild($ul);
    $target.appendChild($footer);
  }
}
