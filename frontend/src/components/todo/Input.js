export class Input {
  constructor({ $target }) {
    const $div = document.createElement("div");
    $div.id = "todo_input_wrap";

    const $input = document.createElement("input");
    $input.setAttribute("maxlength", "50");
    $input.setAttribute("placeholder", "Enter what you want to do.");
    $input.setAttribute("type", "text");

    const $button = document.createElement("button");
    $button.setAttribute("type", "button");
    $button.textContent = "등록";

    $div.appendChild($input);
    $div.appendChild($button);

    $target.appendChild($div);
  }
}
