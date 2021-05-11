import { LayeredTileFactory } from './layered_tile_factory.js';
import { AnimatableTileFactory } from './animatable_tile_factory.js';
import { TileFactory } from './tile_factory.js';

export function projectile(tile_factory: AnimatableTileFactory): TileFactory {
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

  return new LayeredTileFactory([copy]);
}
