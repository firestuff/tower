import { LayeredTileFactory } from './layered_tile_factory.js';
import { SimpleTileFactory } from './simple_tile_factory.js';

// Straig
export const ROAD_LR = new SimpleTileFactory(6, 4, 'road-lr');
export const ROAD_TB = new SimpleTileFactory(4, 6, 'road-tb');

// Elbow
export const ROAD_BL = new SimpleTileFactory(6, 6, 'road-bl');
export const ROAD_BR = new SimpleTileFactory(6, 6, 'road-br');
export const ROAD_TL = new SimpleTileFactory(6, 6, 'road-tl');
export const ROAD_TR = new SimpleTileFactory(6, 6, 'road-tr');

// T
export const ROAD_BLR = new SimpleTileFactory(8, 6, 'road-blr');
export const ROAD_TLR = new SimpleTileFactory(8, 6, 'road-tlr');
export const ROAD_LTB = new SimpleTileFactory(6, 8, 'road-ltb');
export const ROAD_RTB = new SimpleTileFactory(6, 8, 'road-rtb');

// +
export const ROAD_TBLR = new SimpleTileFactory(8, 8, 'road-tblr');

// Tower base
export const EMPTY = new SimpleTileFactory(4, 2, 'empty');

// Straight
export const RIVER_LR = new SimpleTileFactory(6, 4, 'river-lr');
export const RIVER_TB = new SimpleTileFactory(4, 6, 'river-tb');

// Elbow
export const RIVER_BR = new SimpleTileFactory(6, 6, 'river-br');
export const RIVER_BL = new SimpleTileFactory(6, 6, 'river-bl');
export const RIVER_TR = new SimpleTileFactory(6, 6, 'river-tr');
export const RIVER_TL = new SimpleTileFactory(6, 6, 'river-tl');

export const BRIDGE_LR = new SimpleTileFactory(6, 4, 'bridge-lr');

const tower_fireball1_back = new SimpleTileFactory(4, 4, 'fireball1-back');
const tower_fireball1 = new SimpleTileFactory(4, 4, 'fireball1');
const tower_fireball1_front = new SimpleTileFactory(4, 4, 'fireball1-front');

for (const tile_factory of [tower_fireball1_back, tower_fireball1_front]) {
  tile_factory.add_animation(
    'fire',
    [
      {
        'offset': 0.0,
        'easing': 'cubic-bezier(0.02, 1.07, 0.73, 0.99)',

        'top': '0',
      },
      {
        'offset': 0.3,
        'easing': 'linear',

        'top': '20%',
      },
      {
        'offset': 1.0,

        'top': '0',
      },
    ],
    {
      'duration': 3000,
      'iterations': 1,
    },
  );
}

export const TOWER_FIREBALL1 = new LayeredTileFactory([
  tower_fireball1_back,
  tower_fireball1,
  tower_fireball1_front,
]);

/*
class Fireball extends SimpleTileFactory {
  get_elem(tileset: string): HTMLElement {
    const elem = document.createElement('div');
    elem.style.gridColumnEnd = `span ${this.width}`;
    elem.style.gridRowEnd = `span ${this.height}`;
    elem.style.position = 'relative';

    const base = document.createElement('div');
    elem.appendChild(base);
    base.style.width = '100%';
    base.style.height = '100%';
    base.style.position = 'absolute';
    base.style.top = '0';
    base.style.left = '0';
    base.style.backgroundImage = `url("images/${tileset}/${this.name}.svg")`;
    base.style.backgroundSize = 'cover';
    base.style.visibility = 'hidden';

    setInterval(() => {
      base.animate([
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
      ], {
        'duration': 1500,
        'iterations': 1,
      });

      base.animate([
        {
          'offset': 0.0,
          'easing': 'linear',

          'visibility': 'visible',
          'left': '0',
          'transform': 'rotate(0)',
        },
        {
          'offset': 1.0,

          'visibility': 'hidden',
          'left': '1000%',
          'transform': 'rotate(720deg)',
        },
      ], {
        'duration': 1500,
        'iterations': 1,
      });
    }, 3250);

    return elem;
  }
}
export const FIREBALL = new Fireball('fireball', 2, 2);
*/
