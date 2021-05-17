import { Mask } from './mask.js';
import { Tile } from './tile.js';

export abstract class TileFactory {
  layer_name: string;
  width: number;
  height: number;
  masks: Map<string, Mask> = new Map<string, Mask>();

  constructor(layer_name: string, width: number, height: number) {
    this.layer_name = layer_name;
    this.width = width;
    this.height = height;
  }

  add_mask(name: string, mask: Mask) {
    this.masks.set(name, mask);
  }

  tile_args(): [number, number, Map<string, Mask>] {
    return [
      this.width,
      this.height,
      this.masks,
    ];
  }

  abstract build(tileset: string): Tile;

  abstract copy(): TileFactory;
}
