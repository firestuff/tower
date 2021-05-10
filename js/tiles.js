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
class Tower extends Tile {
    get_elem(_) {
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
        base.style.backgroundImage = `url("images/tower/${this.name}.svg")`;
        base.style.backgroundSize = 'cover';
        base.style.zIndex = '2';
        const back = document.createElement('div');
        elem.appendChild(back);
        back.style.width = '100%';
        back.style.height = '100%';
        back.style.position = 'absolute';
        back.style.top = '0';
        back.style.left = '0';
        back.style.backgroundImage = `url("images/tower/${this.name}-back.svg")`;
        back.style.backgroundSize = 'cover';
        back.style.zIndex = '1';
        const front = document.createElement('div');
        elem.appendChild(front);
        front.style.width = '100%';
        front.style.height = '100%';
        front.style.position = 'absolute';
        front.style.top = '0';
        front.style.left = '0';
        front.style.backgroundImage = `url("images/tower/${this.name}-front.svg")`;
        front.style.backgroundSize = 'cover';
        front.style.zIndex = '3';
        setInterval(() => {
            back.animate([
                {
                    'offset': 0.0,
                    'easing': 'cubic-bezier(0.02, 1.07, 0.73, 0.99)',
                    'top': '0',
                },
                {
                    'offset': 0.3,
                    'easing': 'linear',
                    'top': '25%',
                },
                {
                    'offset': 1.0,
                    'top': '0',
                },
            ], {
                'duration': 3000,
                'iterations': 1,
            });
            front.animate([
                {
                    'offset': 0.0,
                    'easing': 'cubic-bezier(0.02, 1.07, 0.73, 0.99)',
                    'top': '0',
                },
                {
                    'offset': 0.3,
                    'easing': 'linear',
                    'top': '25%',
                },
                {
                    'offset': 1.0,
                    'top': '0',
                },
            ], {
                'duration': 3000,
                'iterations': 1,
            });
        }, 5000);
        return elem;
    }
}
export const FIREBALL1 = new Tower('fireball1', 4, 4);
class Fireball extends Tile {
    get_elem(_) {
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
        base.style.backgroundImage = `url("images/tower/${this.name}.svg")`;
        base.style.backgroundSize = 'cover';
        base.style.visibility = 'hidden';
        setInterval(() => {
            base.animate([
                {
                    'offset': 0.0,
                    'easing': 'cubic-bezier(0.33333, 0.66667, 0.66667, 1)',
                    'top': '0',
                },
                {
                    'offset': 0.50,
                    'easing': 'cubic-bezier(0.33333, 0, 0.66667, 0.33333)',
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
        }, 5000);
        return elem;
    }
}
export const FIREBALL = new Fireball('fireball', 2, 2);
//# sourceMappingURL=tiles.js.map