import { SimpleTile } from './simple_tile.js';
import { AnimatableTileFactory } from './animatable_tile_factory.js';
export class SimpleTileFactory extends AnimatableTileFactory {
    constructor(layer_name, width, height, name) {
        super(layer_name, width, height);
        this.name = name;
    }
    build(tileset) {
        return new SimpleTile(...this.animatable_tile_args(), `images/${this.name.replace('{tileset}', tileset)}`);
    }
    copy() {
        const stf = new SimpleTileFactory(this.layer_name, this.width, this.height, this.name);
        for (const [name, [keyframes, options]] of this.animations) {
            stf.add_animation(name, keyframes, options);
        }
        return stf;
    }
}
//# sourceMappingURL=simple_tile_factory.js.map