import { Tile } from './tile.js';
import { TileFactory } from './tile_factory.js';

export class Layer {
  level: number;
  tileset: string;

  constructor(level: number, tileset: string) {
    this.level = level;
    this.tileset = tileset;
  }

  add_tile(tile_factory: TileFactory, y: number): Tile {
    const tile = tile_factory.build(this.tileset);
    tile.elem.style.zIndex = `${this.level + y}`;
    return tile;
  }
}
