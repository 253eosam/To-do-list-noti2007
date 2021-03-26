export class Header {
  constructor({ $wrap }) {
    this.$header = document.createElement("header");
    this.$header.id = "main_header";

    const $h1 = document.createElement("h1");
    $h1.textContent = "TO DO NOTI";

    const $label = document.createElement("label");
    $label.htmlFor = "toggle";
    $label.textContent = "Toggle";

    this.$header.appendChild($h1);
    this.$header.appendChild($label);
    $wrap.appendChild(this.$header);
  }
}
