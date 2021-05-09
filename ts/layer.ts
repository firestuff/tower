import { Tile } from './tile.js';

export class Layer {
  #size_x: number;
  #size_y: number;
  #level: number;
  #tileset: string;

  #occupied: boolean[][];

  constructor(size_x: number, size_y: number) {
    this.#size_x = size_x;
    this.#size_y = size_y;

    this.#occupied = [];

    for (let xi = 0; xi < this.#size_x; xi++) {
      this.#occupied.push(Array(this.#size_y).fill(false));
    }
  }

  set_level(level: number) {
    this.#level = level;
  }

  set_tileset(tileset: string) {
    this.#tileset = tileset;
  }

  add_tile(tile: Tile, x: number, y: number): HTMLElement | undefined {
    if (!this.can_add(tile, x, y)) {
      return undefined;
    }

    this.mark_occupied(tile, x, y);

    const elem = tile.get_elem(this.#tileset);
    elem.style.zIndex = `${this.#level}`;

    return elem;
  }

  private can_add(tile: Tile, x: number, y: number) {
    const mask = tile.get_mask();

    for (let xi = 0; xi < mask.length; xi++) {
      if (x + xi >= this.#occupied.length) {
        // Shape goes off grid (x)
        return false;
      }

      for (let yi = 0; yi < mask[xi].length; yi++) {
        if (!mask[xi][yi]) {
          continue;
        }

        if (y + yi >= this.#occupied[x + xi].length) {
          // Shape goes off grid (y)
          return false;
        }

        if (this.#occupied[x + xi][y + yi]) {
          // Conflicts
          return false;
        }
      }
    }

    return true;
  }

  private mark_occupied(tile: Tile, x: number, y: number) {
    const mask = tile.get_mask();

    for (let xi = 0; xi < mask.length; xi++) {
      for (let yi = 0; yi < mask[xi].length; yi++) {
        if (!mask[xi][yi]) {
          continue;
        }

        this.#occupied[x + xi][y + yi] = true;
      }
    }
  }
}
