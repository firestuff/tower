import { Layer } from './layer.js';
export class Grid {
    constructor(prnt) {
        this.layers = new Map();
        this.prnt = prnt;
        this.prnt.style.display = 'grid';
    }
    set_size(x, y) {
        this.height = y;
        this.prnt.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        this.prnt.style.gridTemplateRows = `repeat(${y}, 1fr)`;
    }
    set_tileset(set) {
        this.tileset = set;
        this.prnt.style.backgroundImage = `url("images/${this.tileset}/land.svg")`;
        // TODO: Notify layers
    }
    set_layers(layers) {
        const newNames = new Set(layers);
        for (const name of newNames) {
            if (!this.layers.has(name)) {
                const layer = new Layer();
                layer.set_tileset(this.tileset);
                this.layers.set(name, layer);
            }
        }
        for (const name of this.layers.keys()) {
            if (!newNames.has(name)) {
                // TODO: Notify layer to tear down
                this.layers.delete(name);
            }
        }
        for (let i = 0; i < layers.length; i++) {
            const layer = this.layers.get(layers[i]);
            layer.set_level(i * this.height);
        }
    }
    add_tile(tile_factory, x, y) {
        const tile = this.layers.get(tile_factory.layer_name).add_tile(tile_factory, y);
        // Grids are 1-indexed
        tile.elem.style.gridColumnStart = `${x + 1}`;
        tile.elem.style.gridRowStart = `${y + 1}`;
        this.prnt.appendChild(tile.elem);
        return tile;
    }
}
//# sourceMappingURL=grid.js.map