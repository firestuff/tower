import { Tile } from './tile.js';
export class AnimatableTile extends Tile {
    constructor(width, height, masks, animations) {
        super(width, height, masks);
        this.animations = animations;
    }
    play(name) {
        const animation = this.animations.get(name);
        if (animation) {
            return this.elem.animate(...animation);
        }
        else {
            return undefined;
        }
    }
}
//# sourceMappingURL=animatable_tile.js.map