class Header {
  $header = null;

  constructor({ $target }) {
    this.$header = document.createElement("header");
    const $h1 = document.createElement("h1");
    const $a = document.createElement("a");

    $a.innerText = "To do list";
    $a.href = "http://ec2-15-165-154-33.ap-northeast-2.compute.amazonaws.com/";
    $a.className = "no_anchor_style";

    $h1.appendChild($a);
    this.$header.appendChild($h1);
    $target.appendChild(this.$header);
  }
}
