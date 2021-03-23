class App {
  $target = null;
  $header = null;
  $container = null;
  $menu = null;

  constructor($target) {
    this.$target = $target;
    this.$header = new Header({ $target });
    this.$container = new Container({ $target });
    this.$menu = new BottomMenu({ $target });
  }
}
