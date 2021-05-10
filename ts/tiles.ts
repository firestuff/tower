import { LayeredTile } from './layered_tile.js';
import { Tile } from './tile.js';

// Straight
export const ROAD_LR = new Tile('road-lr', 6, 4);
export const ROAD_TB = new Tile('road-tb', 4, 6);

// Elbow
export const ROAD_BL = new Tile('road-bl', 6, 6);
export const ROAD_BR = new Tile('road-br', 6, 6);
export const ROAD_TL = new Tile('road-tl', 6, 6);
export const ROAD_TR = new Tile('road-tr', 6, 6);

// T
export const ROAD_BLR = new Tile('road-blr', 8, 6);
export const ROAD_TLR = new Tile('road-tlr', 8, 6);
export const ROAD_LTB = new Tile('road-ltb', 6, 8);
export const ROAD_RTB = new Tile('road-rtb', 6, 8);

// +
export const ROAD_TBLR = new Tile('road-tblr', 8, 8);

// Tower base
export const EMPTY = new Tile('empty', 4, 2);

// Straight
export const RIVER_LR = new Tile('river-lr', 6, 4);
export const RIVER_TB = new Tile('river-tb', 4, 6);

// Elbow
export const RIVER_BR = new Tile('river-br', 6, 6);
export const RIVER_BL = new Tile('river-bl', 6, 6);
export const RIVER_TR = new Tile('river-tr', 6, 6);
export const RIVER_TL = new Tile('river-tl', 6, 6);

export const BRIDGE_LR = new Tile('bridge-lr', 6, 4);

const tower_fireball1_back = new Tile('fireball1-back', 4, 4);
const tower_fireball1 = new Tile('fireball1', 4, 4);
const tower_fireball1_front = new Tile('fireball1-front', 4, 4);

for (const tile of [tower_fireball1_back, tower_fireball1_front]) {
  tile.add_animation(
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

export const TOWER_FIREBALL1 = new LayeredTile([
  tower_fireball1_back,
  tower_fireball1,
  tower_fireball1_front,
]);

class Fireball extends Tile {
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
