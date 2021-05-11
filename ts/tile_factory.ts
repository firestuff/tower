import { Tile } from './tile.js';

export abstract class TileFactory {
  layer_name: string;
  width: number;
  height: number;

  constructor(layer_name: string, width: number, height: number) {
    this.layer_name = layer_name;
    this.width = width;
    this.height = height;
  }

  abstract build(tileset: string): Tile;

  abstract copy(): TileFactory;
}
