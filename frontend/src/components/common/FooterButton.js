export class FooterButton {
  constructor(className, text) {
    this.id = null;
    this.className = `fas fa-${className}`;
    this.text = text;
  }

  addId(id) {
    this.id = id;
  }
}
