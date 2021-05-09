export class Tile {
  #name: string;
  #width: number;
  #height: number;
  #mask: boolean[][];

  constructor(name: string, width: number, height: number, mask: boolean[][]) {
    this.#name = name;
    this.#width = width;
    this.#height = height;
    this.#mask = mask;
  }

  static rectangle(name: string, width: number, height: number): Tile {
    const mask = Array(width).fill(Array(height).fill(true));
    return new Tile(name, width, height, mask);
  }

  get_mask(): boolean[][] {
    return this.#mask;
  }

  get_elem(tileset: string): HTMLElement {
    const elem = document.createElement('div');
    elem.style.backgroundImage = `url("images/${tileset}/${this.#name}.svg")`;
    elem.style.backgroundSize = 'cover';
    elem.style.gridColumnEnd = `span ${this.#width}`;
    elem.style.gridRowEnd = `span ${this.#height}`;
    return elem;
  }
}
