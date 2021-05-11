import { LayeredTile } from './layered_tile.js';
import { TileFactory } from './tile_factory.js';
export class LayeredTileFactory extends TileFactory {
    constructor(tile_factories) {
        super(tile_factories[0].width, tile_factories[0].height);
        this.tile_factories = tile_factories;
    }
    build(tileset) {
        const tiles = [];
        for (const tile_factory of this.tile_factories) {
            tiles.push(tile_factory.build(tileset));
        }
        return new LayeredTile(this.width, this.height, tiles);
    }
}
//# sourceMappingURL=layered_tile_factory.js.map