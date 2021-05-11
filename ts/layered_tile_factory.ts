import { LayeredTile } from './layered_tile.js';
import { TileFactory } from './tile_factory.js';

export class LayeredTileFactory extends TileFactory {
  tile_factories: TileFactory[];

  constructor(tile_factories: TileFactory[]) {
    super(
      tile_factories[0].layer_name,
      tile_factories[0].width,
      tile_factories[0].height,
    );
    this.tile_factories = tile_factories;
  }

  build(tileset: string): LayeredTile {
    const tiles = [];

    for (const tile_factory of this.tile_factories) {
      tiles.push(tile_factory.build(tileset));
    }

    return new LayeredTile(this.width, this.height, tiles);
  }
}
