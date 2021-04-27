import { Workspace } from "../../models/todo/Workspace";

export class Header {
  constructor({ $target, mock_data }) {
    const $header = document.createElement("header");
    $header.id = "todo_header";
    const $ul = document.createElement("ul");
    const $titleLi = document.createElement("li");
    const $title = document.createElement("h2");
    $title.id = "workspace_tag";
    $title.className = "tag";
    $title.textContent = mock_data.title;
    $titleLi.appendChild($title);
    $ul.appendChild($titleLi);

    mock_data.users.forEach((user, idx) => {
      const $li = document.createElement("li");
      const $span = document.createElement("span");

      $span.className = `tag ${Workspace.color[idx]}`;
      $span.textContent = user;

      $li.appendChild($span);
      $ul.appendChild($li);
    });

    $header.appendChild($ul);
    $target.appendChild($header);
  }
}
