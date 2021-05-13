import { LayeredTileFactory } from './layered_tile_factory.js';
import { SequenceTileFactory } from './sequence_tile_factory.js';
import { SimpleTileFactory } from './simple_tile_factory.js';
// Straig
export const ROAD_LR = new SimpleTileFactory('road', 6, 4, '{tileset}/road-lr');
export const ROAD_TB = new SimpleTileFactory('road', 4, 6, '{tileset}/road-tb');
// Elbow
export const ROAD_BL = new SimpleTileFactory('road', 6, 6, '{tileset}/road-bl');
export const ROAD_BR = new SimpleTileFactory('road', 6, 6, '{tileset}/road-br');
export const ROAD_TL = new SimpleTileFactory('road', 6, 6, '{tileset}/road-tl');
export const ROAD_TR = new SimpleTileFactory('road', 6, 6, '{tileset}/road-tr');
// T
export const ROAD_BLR = new SimpleTileFactory('road', 8, 6, '{tileset}/road-blr');
export const ROAD_TLR = new SimpleTileFactory('road', 8, 6, '{tileset}/road-tlr');
export const ROAD_LTB = new SimpleTileFactory('road', 6, 8, '{tileset}/road-ltb');
export const ROAD_RTB = new SimpleTileFactory('road', 6, 8, '{tileset}/road-rtb');
// +
export const ROAD_TBLR = new SimpleTileFactory('road', 8, 8, '{tileset}/road-tblr');
// Tower base
export const EMPTY = new SimpleTileFactory('road', 4, 2, '{tileset}/empty');
// Straight
export const RIVER_LR = new SimpleTileFactory('water', 6, 4, '{tileset}/river-lr');
export const RIVER_TB = new SimpleTileFactory('water', 4, 6, '{tileset}/river-tb');
// Elbow
export const RIVER_BR = new SimpleTileFactory('water', 6, 6, '{tileset}/river-br');
export const RIVER_BL = new SimpleTileFactory('water', 6, 6, '{tileset}/river-bl');
export const RIVER_TR = new SimpleTileFactory('water', 6, 6, '{tileset}/river-tr');
export const RIVER_TL = new SimpleTileFactory('water', 6, 6, '{tileset}/river-tl');
export const BRIDGE_LR = new SimpleTileFactory('bridge', 6, 4, '{tileset}/bridge-lr');
const tower_fireball1_back = new SimpleTileFactory('surface', 4, 4, 'tower/fireball1-back');
const tower_fireball1 = new SimpleTileFactory('surface', 4, 4, 'tower/fireball1');
const tower_fireball1_front = new SimpleTileFactory('surface', 4, 4, 'tower/fireball1-front');
for (const tile_factory of [tower_fireball1_back, tower_fireball1_front]) {
    tile_factory.add_animation('fire', [
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
export const FIREBALL = new SimpleTileFactory('projectile', 2, 2, 'tower/fireball');
export const FIREBALL_IMPACT = new SequenceTileFactory([
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact1'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact2'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact3'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact4'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact5'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact6'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact7'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact8'),
], 50, false);
//# sourceMappingURL=tiles.js.map