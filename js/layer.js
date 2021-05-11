export class Layer {
    set_level(level) {
        this.level = level;
    }
    set_tileset(tileset) {
        this.tileset = tileset;
    }
    add_tile(tile_factory, y) {
        const tile = tile_factory.build(this.tileset);
        tile.elem.style.zIndex = `${this.level + y}`;
        return tile;
    }
}
//# sourceMappingURL=layer.js.map