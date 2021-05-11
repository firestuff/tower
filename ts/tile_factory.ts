import { Tile } from './tile.js';

export abstract class TileFactory {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  abstract build(tileset: string): Tile;
}
