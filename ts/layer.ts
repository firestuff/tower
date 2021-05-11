import { Tile } from './tile.js';
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

  add_tile(tile_factory: TileFactory): Tile {
    const tile = tile_factory.build(this.#tileset);
    tile.get_elem().style.zIndex = `${this.#level}`;
    return tile;
  }
}
