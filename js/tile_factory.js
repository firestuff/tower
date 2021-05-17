export class TileFactory {
    constructor(layer_name, width, height) {
        this.masks = new Map();
        this.layer_name = layer_name;
        this.width = width;
        this.height = height;
    }
    add_mask(name, mask) {
        this.masks.set(name, mask);
    }
    tile_args() {
        return [
            this.width,
            this.height,
            this.masks,
        ];
    }
}
//# sourceMappingURL=tile_factory.js.map