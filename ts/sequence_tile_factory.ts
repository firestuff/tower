import { AnimatableTileFactory } from './animatable_tile_factory.js';
import { SequenceTile } from './sequence_tile.js';
import { TileFactory } from './tile_factory.js';

export class SequenceTileFactory extends AnimatableTileFactory {
  tile_factories: TileFactory[];
  delay: number;
  repeat: boolean;

  constructor(tile_factories: TileFactory[], delay: number, repeat: boolean) {
    super(
      tile_factories[0].layer_name,
      tile_factories[0].width,
      tile_factories[0].height,
    );
    this.tile_factories = tile_factories;
    this.delay = delay;
    this.repeat = repeat;
  }

  build(tileset: string): SequenceTile {
    const tiles = [];

    for (const tile_factory of this.tile_factories) {
      tiles.push(tile_factory.build(tileset));
    }

    return new SequenceTile(this.width, this.height, this.animations, tiles, this.delay, this.repeat);
  }

  copy(): SequenceTileFactory {
    return new SequenceTileFactory(this.tile_factories, this.delay, this.repeat);
  }
}
