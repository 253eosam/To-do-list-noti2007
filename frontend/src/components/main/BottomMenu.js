export class BottomMenu {
  constructor({ $target }) {
    this.$bottomMenu = document.createElement("div");
    this.$bottomMenu.className = "btm_fix_menu";
    this.buttonData = {
      changeNickBtn: {
        text: "닉네임 변경",
        icon: "fas fa-id-badge",
        onclick: this.onClickChangeNick,
      },
      showTaskToggleBtn: {
        text: "완료 표시",
        icon: "fas fa-check-circle",
        onclick: this.onClickHiddenCompletedTask,
      },
      deleteCompletedTaskBtn: {
        text: "완료제거",
        icon: "fas fa-eraser",
        onclick: this.onClickAllDelCompletedTask,
      },
      filterBtn: {
        text: "필터",
        icon: "fas fa-filter",
        onclick: this.onClickFilter,
      },
      goTopBtn: {
        text: "위로",
        icon: "fas fa-arrow-up",
        onclick: this.onClickTopButton,
      },
    };

    const ulEl = document.createElement("ul");
    Object.keys(this.buttonData).forEach((key) => {
      const { text, icon, onclick } = this.buttonData[key];
      const liEl = document.createElement("li");
      const buttonEl = document.createElement("button");
      const iEl = document.createElement("i");
      const spanEl = document.createElement("span");

      buttonEl.addEventListener("click", onclick);
      buttonEl.className = "btm_menu_btn";
      iEl.className = icon;
      spanEl.textContent = text;

      buttonEl.appendChild(iEl);
      buttonEl.appendChild(spanEl);
      liEl.appendChild(buttonEl);
      ulEl.appendChild(liEl);
    });

    this.$bottomMenu.appendChild(ulEl);
    $target.appendChild(this.$bottomMenu);
  }
}
