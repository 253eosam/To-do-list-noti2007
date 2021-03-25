import { Header } from "@/components/common/Header.js";
import { Container } from "@/components/common/Container.js";
import { BottomMenu } from "@/components/common/BottomMenu.js";

export class App {
  constructor($target) {
    this.$target = $target;
    this.$header = new Header({ $target });
    this.$container = new Container({ $target });
    this.$menu = new BottomMenu({ $target });
  }
}
