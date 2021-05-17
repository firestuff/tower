export class Layer {
    constructor(level, tileset) {
        this.level = level;
        this.tileset = tileset;
    }
    add_tile(tile_factory, y) {
        const tile = tile_factory.build(this.tileset);
        tile.elem.style.zIndex = `${this.level + y}`;
        return tile;
    }
}
//# sourceMappingURL=layer.js.map