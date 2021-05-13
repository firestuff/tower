import { AnimatableTileFactory } from './animatable_tile_factory.js';
import { SequenceTile } from './sequence_tile.js';
export class SequenceTileFactory extends AnimatableTileFactory {
    constructor(tile_factories, delay, repeat) {
        super(tile_factories[0].layer_name, tile_factories[0].width, tile_factories[0].height);
        this.tile_factories = tile_factories;
        this.delay = delay;
        this.repeat = repeat;
    }
    build(tileset) {
        const tiles = [];
        for (const tile_factory of this.tile_factories) {
            tiles.push(tile_factory.build(tileset));
        }
        return new SequenceTile(this.width, this.height, this.animations, tiles, this.delay, this.repeat);
    }
    copy() {
        return new SequenceTileFactory(this.tile_factories, this.delay, this.repeat);
    }
}
//# sourceMappingURL=sequence_tile_factory.js.map