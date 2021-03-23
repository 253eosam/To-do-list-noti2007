class ToDoList {
  $todolist = null;

  constructor({ $target }) {
    const $todolistWrap = document.createElement("div");
    $todolistWrap.id = "to-do-list_wrap";
    $todolistWrap.className = "to-do-list_wrap";

    this.$todolist = document.createElement("ul");
    this.$todolist.id = "to-do-list";
    this.$todolist.className = "to-do-list";

    const $inputBox = document.createElement("div");
    $inputBox.id = "register_box";
    $inputBox.className = "register_box";
    const $input = document.createElement("input");
    const $regiBtn = document.createElement("button");

    $input.type = "text";
    $input.id = "register-todo";
    $input.placeholder = "Enter what you want to do.";
    $input.maxLength = 50;
    $regiBtn.innerText = "등록";

    $inputBox.appendChild($input);
    $inputBox.appendChild($regiBtn);
    $todolistWrap.appendChild(this.$todolist);
    $todolistWrap.appendChild($inputBox);
    $target.appendChild($todolistWrap);

    this.render();
  }

  render() {}
}
