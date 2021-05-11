import { LayeredTileFactory } from './layered_tile_factory.js';
import { TileFactory } from './tile_factory.js';
// Straight
export const ROAD_LR = new TileFactory('road-lr', 6, 4);
export const ROAD_TB = new TileFactory('road-tb', 4, 6);
// Elbow
export const ROAD_BL = new TileFactory('road-bl', 6, 6);
export const ROAD_BR = new TileFactory('road-br', 6, 6);
export const ROAD_TL = new TileFactory('road-tl', 6, 6);
export const ROAD_TR = new TileFactory('road-tr', 6, 6);
// T
export const ROAD_BLR = new TileFactory('road-blr', 8, 6);
export const ROAD_TLR = new TileFactory('road-tlr', 8, 6);
export const ROAD_LTB = new TileFactory('road-ltb', 6, 8);
export const ROAD_RTB = new TileFactory('road-rtb', 6, 8);
// +
export const ROAD_TBLR = new TileFactory('road-tblr', 8, 8);
// Tower base
export const EMPTY = new TileFactory('empty', 4, 2);
// Straight
export const RIVER_LR = new TileFactory('river-lr', 6, 4);
export const RIVER_TB = new TileFactory('river-tb', 4, 6);
// Elbow
export const RIVER_BR = new TileFactory('river-br', 6, 6);
export const RIVER_BL = new TileFactory('river-bl', 6, 6);
export const RIVER_TR = new TileFactory('river-tr', 6, 6);
export const RIVER_TL = new TileFactory('river-tl', 6, 6);
export const BRIDGE_LR = new TileFactory('bridge-lr', 6, 4);
const tower_fireball1_back = new TileFactory('fireball1-back', 4, 4);
const tower_fireball1 = new TileFactory('fireball1', 4, 4);
const tower_fireball1_front = new TileFactory('fireball1-front', 4, 4);
for (const tile of [tower_fireball1_back, tower_fireball1_front]) {
    tile.add_animation('fire', [
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
    ], {
        'duration': 3000,
        'iterations': 1,
    });
}
export const TOWER_FIREBALL1 = new LayeredTileFactory([
    tower_fireball1_back,
    tower_fireball1,
    tower_fireball1_front,
]);
class Fireball extends TileFactory {
    get_elem(tileset) {
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
//# sourceMappingURL=tiles.js.map