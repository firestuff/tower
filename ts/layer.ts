import { TileFactory } from './tile_factory.js';

export class Layer {
  #level: number;
  #tileset: string;

  set_level(level: number) {
    this.#level = level;
  }

  set_tileset(tileset: string) {
    this.#tileset = tileset;
  }

  add_tile(tile_factory: TileFactory): HTMLElement {
    const elem = tile_factory.build(this.#tileset).get_elem();
    elem.style.zIndex = `${this.#level}`;
    return elem;
  }
}
