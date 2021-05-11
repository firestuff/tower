export abstract class Tile {
  elem: HTMLElement;

  constructor(width: number, height: number) {
    this.elem = document.createElement('div');
    this.elem.style.gridColumnEnd = `span ${width}`;
    this.elem.style.gridRowEnd = `span ${height}`;
  }

  abstract play(name: string): void;
}
