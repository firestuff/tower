import { AnimatableTileFactory } from './animatable_tile_factory.js';
import { LayeredTileFactory } from './layered_tile_factory.js';
import { Tile } from './tile.js';
import { TileFactory } from './tile_factory.js';

export class ProjectileTileFactory extends TileFactory {
  source_tile_factory: AnimatableTileFactory;
  tile_factory: TileFactory;

  constructor(tile_factory: AnimatableTileFactory) {
    super(tile_factory.layer_name, tile_factory.width, tile_factory.height);

    this.source_tile_factory = tile_factory;

    const copy = tile_factory.copy();

    copy.add_animation(
      'launch-x',
      [
        {
          'offset': 0.0,
          'easing': 'linear',
          'left': '0',
          'transform': 'rotate(0)',
        },
        {
          'offset': 1.0,
          'left': '1000%',
          'transform': 'rotate(720deg)',
        },
      ],
      {
        'duration': 1500,
        'iterations': 1,
      },
    );

    copy.add_animation(
      'launch-y',
      [
        {
          'offset': 0.0,
          'easing': 'cubic-bezier(0.33, 0.66, 0.66, 1.00)',
          'top': '0',
        },
        {
          'offset': 0.50,
          'easing': 'cubic-bezier(0.33, 0.00, 0.66, 0.33)',
          'top': '-500%',
        },
        {
          'offset': 1.0,
          'top': '0',
        },
      ],
      {
        'duration': 1500,
        'iterations': 1,
      },
    );

    this.tile_factory = new LayeredTileFactory([copy]);
  }

  build(tileset: string): Tile {
    const tile = this.tile_factory.build(tileset);
    tile.play('launch-x')!.finished.then(() => tile.remove());
    tile.play('launch-y');
    return tile;
  }

  copy(): ProjectileTileFactory {
    return new ProjectileTileFactory(this.source_tile_factory);
  }
}
