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
const greenaxe_axe = new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe/axe.svg');
greenaxe_axe.add_animation('walk', [
    {
        'transform': 'scaleX(1.01) scaleY(1.014) translateX(-0.45%) translateY(0.01%) rotate(0.1deg)',
    },
    {
        'transform': 'scaleX(1.01) scaleY(1.014) translateX(0.56%) translateY(3.48%) rotate(13.7deg)',
    },
    {
        'transform': 'scaleX(1.01) scaleY(1.014) translateX(0.67%) translateY(7.15%) rotate(27.1deg)',
    },
    {
        'transform': 'scaleX(1.01) scaleY(1.014) translateX(0%) translateY(10.49%) rotate(40.5deg)',
    },
    {
        'transform': 'scaleX(1.01) scaleY(1.014) translateX(-1.45%) translateY(13.57%) rotate(53.9deg)',
    },
    {
        'transform': 'scaleX(1.01) scaleY(1.014) translateX(-3.8%) translateY(15.99%) rotate(67.2deg)',
    },
], {
    'duration': 500,
    'iterations': Infinity,
    'direction': 'alternate',
});
const greenaxe_rightleg = new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe/rightleg.svg');
greenaxe_rightleg.add_animation('walk', [
    {
        'transform': 'rotate(4.6deg) scaleX(1.025) scaleY(1) translateX(3.11%) translateY(1%)',
    },
    {
        'transform': 'rotate(3.5deg) scaleX(1.01) scaleY(0.996) translateX(2.82%) translateY(1.23%)',
    },
    {
        'transform': 'rotate(-7.8deg) scaleX(1.01) scaleY(0.996) translateX(-2.81%) translateY(-1.5%)',
    },
    {
        'transform': 'rotate(-12.9deg) scaleX(1.01) scaleY(0.996) translateX(-4.79%) translateY(-2.99%)',
    },
    {
        'transform': 'rotate(-19.4deg) scaleX(1.01) scaleY(0.996) translateX(-7.35%) translateY(-5.29%)',
    },
    {
        'transform': 'rotate(-26.4deg) scaleX(1.01) scaleY(0.996) translateX(-9.77%) translateY(-8.15%)',
    },
], {
    'duration': 500,
    'iterations': Infinity,
    'direction': 'alternate',
});
const greenaxe_leftleg = new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe/leftleg.svg');
greenaxe_leftleg.add_animation('walk', [
    {
        'transform': 'rotate(-1deg) scaleX(1.024) scaleY(1.005) translateX(-0.7%) translateY(-0.16%)',
    },
    {
        'transform': 'rotate(2.5deg) scaleX(1.019) scaleY(1.005) translateX(0.64%) translateY(-0.15%)',
    },
    {
        'transform': 'rotate(9deg) scaleX(1.019) scaleY(1.005) translateX(3.52%) translateY(-0.77%)',
    },
    {
        'transform': 'rotate(14.5deg) scaleX(1) scaleY(1) translateX(6.09%) translateY(-1.28%)',
    },
    {
        'transform': 'rotate(21.9deg) scaleX(1) scaleY(1) translateX(9.26%) translateY(-2.71%)',
    },
    {
        'transform': 'rotate(25.2deg) scaleX(1) scaleY(1) translateX(10.09%) translateY(-3.32%)',
    },
], {
    'duration': 500,
    'iterations': Infinity,
    'direction': 'alternate',
});
const greenaxe_torso = new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe/torso.svg');
greenaxe_torso.add_animation('walk', [
    {
        'transform': 'rotate(1.3deg) scaleX(1.021) scaleY(1) translateX(0.61%) translateY(0.67%)',
    },
    {
        'transform': 'rotate(2.3deg) scaleX(1.018) scaleY(0.992) translateX(0.81%) translateY(1%)',
    },
    {
        'transform': 'rotate(2.2deg) scaleX(1.015) scaleY(0.996) translateX(0.8%) translateY(1.02%)',
    },
    {
        'transform': 'rotate(1.8deg) scaleX(1.018) scaleY(0.993) translateX(0.64%) translateY(0.95%)',
    },
    {
        'transform': 'rotate(1.8deg) scaleX(1.018) scaleY(0.993) translateX(0.64%) translateY(0.95%)',
    },
    {
        'transform': 'rotate(1.8deg) scaleX(1.018) scaleY(0.993) translateX(0.64%) translateY(0.95%)',
    },
], {
    'duration': 500,
    'iterations': Infinity,
    'direction': 'alternate',
});
const greenaxe_head = new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe/head.svg');
greenaxe_head.add_animation('walk', [
    {
        'transform': 'rotate(-0.8deg) scaleX(1.027) scaleY(0.993) translateX(0.44%) translateY(-0.35%)',
    },
    {
        'transform': 'rotate(-0.6deg) scaleX(1.033) scaleY(0.993) translateX(0.9%) translateY(-0.35%)',
    },
    {
        'transform': 'rotate(0.8deg) scaleX(1.033) scaleY(0.993) translateX(0.9%) translateY(-0.35%)',
    },
    {
        'transform': 'rotate(2.1deg) scaleX(1.033) scaleY(0.993) translateX(0.9%) translateY(-0.31%)',
    },
    {
        'transform': 'rotate(3.3deg) scaleX(1.033) scaleY(0.993) translateX(0.93%) translateY(-0.29%)',
    },
    {
        'transform': 'rotate(4.4deg) scaleX(1.028) scaleY(0.993) translateX(0.98%) translateY(-0.32%)',
    },
], {
    'duration': 500,
    'iterations': Infinity,
    'direction': 'alternate',
});
const greenaxe_rightarm = new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe/rightarm.svg');
greenaxe_rightarm.add_animation('walk', [
    {
        'transform': 'rotate(1.1deg) scaleX(1) scaleY(1.009) translateX(0.12%) translateY(0.54%)',
    },
    {
        'transform': 'rotate(15.3deg) scaleX(1.006) scaleY(1.003) translateX(2.29%) translateY(4.11%)',
    },
    {
        'transform': 'rotate(28.8deg) scaleX(1.02) scaleY(0.99) translateX(4.97%) translateY(6.91%)',
    },
    {
        'transform': 'rotate(42.7deg) scaleX(1.02) scaleY(0.985) translateX(8.07%) translateY(8.95%)',
    },
    {
        'transform': 'rotate(56.1deg) scaleX(1.024) scaleY(0.99) translateX(11.37%) translateY(9.95%)',
    },
    {
        'transform': 'rotate(69.9deg) scaleX(1.017) scaleY(0.983) translateX(14.8%) translateY(10.43%)',
    },
], {
    'duration': 500,
    'iterations': Infinity,
    'direction': 'alternate',
});
const greenaxe_leftarm = new SimpleTileFactory('surface', 3, 3, 'monster/greenaxe/leftarm.svg');
greenaxe_leftarm.add_animation('walk', [
    {
        'transform': 'rotate(0deg) scaleX(1) scaleY(1) translateX(0%) translateY(0%)',
    },
    {
        'transform': ' rotate(0deg) scaleX(1) scaleY(1) translateX(0%) translateY(0%)',
    },
    {
        'transform': 'rotate(0.6deg) scaleX(1) scaleY(1) translateX(2.51%) translateY(2.89%)',
    },
    {
        'transform': 'rotate(-7.6deg) scaleX(1) scaleY(1) translateX(2.51%) translateY(2.89%)',
    },
    {
        'transform': 'rotate(-13.7deg) scaleX(1) scaleY(1) translateX(3.42%) translateY(5.13%)',
    },
    {
        'transform': 'rotate(-20.7deg) scaleX(1) scaleY(1) translateX(3.62%) translateY(6.13%)',
    },
], {
    'duration': 500,
    'iterations': Infinity,
    'direction': 'alternate',
});
export const GREENAXE = new LayeredTileFactory([
    greenaxe_leftarm,
    greenaxe_leftleg,
    greenaxe_rightleg,
    greenaxe_torso,
    greenaxe_head,
    greenaxe_axe,
    greenaxe_rightarm,
]);
//# sourceMappingURL=tiles.js.map