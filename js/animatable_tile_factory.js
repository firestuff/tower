import { TileFactory } from './tile_factory.js';
export class AnimatableTileFactory extends TileFactory {
    constructor() {
        super(...arguments);
        this.animations = new Map();
    }
    add_animation(name, keyframes, options) {
        this.animations.set(name, [keyframes, options]);
    }
}
//# sourceMappingURL=animatable_tile_factory.js.map