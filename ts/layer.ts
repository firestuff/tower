import { Tile } from './tile.js';

export class Layer {
  #level: number;
  #tileset: string;

  set_level(level: number) {
    this.#level = level;
  }

  set_tileset(tileset: string) {
    this.#tileset = tileset;
  }

  add_tile(tile: Tile): HTMLElement {
    const elem = tile.get_elem(this.#tileset);
    elem.style.zIndex = `${this.#level}`;
    return elem;
  }
}
