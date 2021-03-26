export class ToDoList {
  constructor({ $target }) {
    const $toDoListWrap = document.createElement("div");
    $toDoListWrap.id = "to-do-list_wrap";
    $toDoListWrap.className = "to-do-list_wrap";

    this.$toDoList = document.createElement("ul");
    this.$toDoList.id = "to-do-list";
    this.$toDoList.className = "to-do-list";

    const $inputBox = document.createElement("div");
    $inputBox.id = "register_box";
    $inputBox.className = "register_box";
    const $input = document.createElement("input");
    const $registerBtn = document.createElement("button");

    $input.type = "text";
    $input.id = "register-todo";
    $input.placeholder = "Enter what you want to do.";
    $input.maxLength = 50;
    $registerBtn.innerText = "등록";

    $inputBox.appendChild($input);
    $inputBox.appendChild($registerBtn);
    $toDoListWrap.appendChild(this.$toDoList);
    $toDoListWrap.appendChild($inputBox);
    $target.appendChild($toDoListWrap);

    this.render();
  }

  render() {}
}
