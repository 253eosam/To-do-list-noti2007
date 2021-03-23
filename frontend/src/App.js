class App {
  $target = null;

  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    const h1 = document.createElement("h1");
    h1.innerText = "Hello world ~!";

    this.$target.appendChild(h1);
  }
}
