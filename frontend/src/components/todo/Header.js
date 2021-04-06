import { Workspace } from "@/models/todo/Workspace.js";

export class Header {
  constructor({ $target }) {
    const $header = document.createElement("header");
    $header.id = "todo_header";
    const $ul = document.createElement("ul");

    const mock_data = new Workspace({
      id: 1,
      title: "Test work space title",
      users: ["A User", "B User"],
    });

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
      // TODO: span class에 tag랑 color를 넣어야함
      // > color 워크스페이스에서 관리함. 따라서 워크스페이스에 속성으로 가지고 있어야함.
      /* exam) 
        Workspace class : static color = ['red','blue'] 
        $span.className = `tag ${Workspace.color[idx]}`;
      */
      $span.className = `tag`;
      $span.textContent = user;

      $li.appendChild($span);
      $ul.appendChild($li);
    });

    $header.appendChild($ul);
    $target.appendChild($header);
  }
}
