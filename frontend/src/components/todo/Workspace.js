import { User } from "@/models/todo/User.js";

export class Workspace {
  constructor({ $target, user }) {
    const $article = document.createElement("article");
    $article.className = "todo_box";

    const mock_data = new User({
      id: 1,
      name: user,
      todos: [
        "해야할일",
        "긴글연습 긴글연습 긴글연습 긴글연습 긴글연습 긴글연습 긴글연습",
      ],
    });

    const { name, todos } = mock_data;
    const $h3 = document.createElement("h3");
    $h3.textContent = name;
    $article.appendChild($h3);

    const $ul = document.createElement("ul");
    $ul.className = "todo-list";

    todos.forEach((todo, idx) => {
      const $li = document.createElement("li");
      $li.className = "todo-item";

      const $input = document.createElement("input");
      $input.setAttribute("type", "checkbox");
      $input.id = `${idx}${name}TodoItemId`;

      const $label = document.createElement("label");
      $label.setAttribute("for", $input.id);
      $label.textContent = "to do check status";

      const $p = document.createElement("p");
      $p.textContent = todo;

      const $button = document.createElement("button");
      $button.textContent = "지우기 버튼";

      $li.appendChild($input);
      $li.appendChild($label);
      $li.appendChild($p);
      $li.appendChild($button);
      $ul.appendChild($li);
    });

    $article.appendChild($ul);
    $target.appendChild($article);
  }
}
