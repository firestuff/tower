import { LayeredTileFactory } from './layered_tile_factory.js';
import { SequenceTileFactory } from './sequence_tile_factory.js';
import { SimpleTileFactory } from './simple_tile_factory.js';
// Straig
export const ROAD_LR = new SimpleTileFactory('road', 6, 4, '{tileset}/road-lr.svg');
export const ROAD_TB = new SimpleTileFactory('road', 4, 6, '{tileset}/road-tb.svg');
// Elbow
export const ROAD_BL = new SimpleTileFactory('road', 6, 6, '{tileset}/road-bl.svg');
export const ROAD_BR = new SimpleTileFactory('road', 6, 6, '{tileset}/road-br.svg');
export const ROAD_TL = new SimpleTileFactory('road', 6, 6, '{tileset}/road-tl.svg');
export const ROAD_TR = new SimpleTileFactory('road', 6, 6, '{tileset}/road-tr.svg');
// T
export const ROAD_BLR = new SimpleTileFactory('road', 8, 6, '{tileset}/road-blr.svg');
export const ROAD_TLR = new SimpleTileFactory('road', 8, 6, '{tileset}/road-tlr.svg');
export const ROAD_LTB = new SimpleTileFactory('road', 6, 8, '{tileset}/road-ltb.svg');
export const ROAD_RTB = new SimpleTileFactory('road', 6, 8, '{tileset}/road-rtb.svg');
// +
export const ROAD_TBLR = new SimpleTileFactory('road', 8, 8, '{tileset}/road-tblr.svg');
// Tower base
export const EMPTY = new SimpleTileFactory('road', 4, 2, '{tileset}/empty.svg');
// Straight
export const RIVER_LR = new SimpleTileFactory('water', 6, 4, '{tileset}/river-lr.svg');
export const RIVER_TB = new SimpleTileFactory('water', 4, 6, '{tileset}/river-tb.svg');
// Elbow
export const RIVER_BR = new SimpleTileFactory('water', 6, 6, '{tileset}/river-br.svg');
export const RIVER_BL = new SimpleTileFactory('water', 6, 6, '{tileset}/river-bl.svg');
export const RIVER_TR = new SimpleTileFactory('water', 6, 6, '{tileset}/river-tr.svg');
export const RIVER_TL = new SimpleTileFactory('water', 6, 6, '{tileset}/river-tl.svg');
export const BRIDGE_LR = new SimpleTileFactory('bridge', 6, 4, '{tileset}/bridge-lr.svg');
const tower_fireball1_back = new SimpleTileFactory('surface', 4, 4, 'tower/fireball1-back.svg');
const tower_fireball1 = new SimpleTileFactory('surface', 4, 4, 'tower/fireball1.svg');
const tower_fireball1_front = new SimpleTileFactory('surface', 4, 4, 'tower/fireball1-front.svg');
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
export const FIREBALL = new SimpleTileFactory('projectile', 2, 2, 'tower/fireball.svg');
export const FIREBALL_IMPACT = new SequenceTileFactory([
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact1.svg'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact2.svg'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact3.svg'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact4.svg'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact5.svg'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact6.svg'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact7.svg'),
    new SimpleTileFactory('surface', 2, 2, 'tower/fireball-impact8.svg'),
], 50, false);
export const GREENAXE_WALK1 = new SequenceTileFactory([
    new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe-walk1.png'),
    new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe-walk2.png'),
    new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe-walk3.png'),
    new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe-walk4.png'),
    new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe-walk5.png'),
    new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe-walk6.png'),
    new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe-walk7.png'),
    new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe-walk8.png'),
    new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe-walk9.png'),
    new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe-walk10.png'),
], 100, true);
//# sourceMappingURL=tiles.js.map