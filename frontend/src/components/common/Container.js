class Container {
  $container = null;

  constructor({ $target }) {
    this.$container = document.createElement("div");
    this.$container.id = "container";

    $target.appendChild(this.$container);

    this.render();
  }

  render() {
    new ToDoList({ $target: this.$container });
  }
}
