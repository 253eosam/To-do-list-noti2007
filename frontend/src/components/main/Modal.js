export class Modal {
  constructor({ $wrap }) {
    const $labelWrap = document.createElement("label");
    $labelWrap.htmlFor = "toggle";
    $labelWrap.id = "toggle_modal_wrap";

    const $modal = document.createElement("div");
    $modal.id = "toggle_modal";

    const $ul = document.createElement("ul");

    [
      "Nick Name 변경",
      "Work Space 변경",
      "초대하기",
      "Work Space 관리",
      "로그아웃",
    ].forEach((item) => {
      const $li = document.createElement("li");
      const $modalItem = document.createElement("div");
      $modalItem.className = "modal-item";
      $modalItem.textContent = item;

      $li.appendChild($modalItem);
      $ul.appendChild($li);
    });

    $modal.appendChild($ul);
    $labelWrap.appendChild($modal);
    $wrap.appendChild($labelWrap);
  }
}
