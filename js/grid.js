import { Layer } from './layer.js';
import { Mask } from './mask.js';
export class Grid {
    constructor(prnt, width, height, tileset, layers, masks) {
        this.layers = new Map();
        this.masks = new Map();
        this.prnt = prnt;
        this.prnt.style.display = 'grid';
        this.prnt.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        this.prnt.style.gridTemplateRows = `repeat(${height}, 1fr)`;
        this.prnt.style.backgroundImage = `url("images/${tileset}/land.svg")`;
        for (let i = 0; i <= layers.length; i++) {
            const name = layers[i];
            this.layers.set(name, new Layer(i * height, tileset));
        }
        for (const name of masks) {
            this.masks.set(name, new Mask(width, height));
        }
    }
    add_tile(tile_factory, x, y) {
        const tile = this.layers.get(tile_factory.layer_name).add_tile(tile_factory, y);
        // Grids are 1-indexed
        tile.elem.style.gridColumnStart = `${x + 1}`;
        tile.elem.style.gridRowStart = `${y + 1}`;
        this.prnt.appendChild(tile.elem);
        for (const [name, mask] of tile.masks) {
            this.masks.get(name).update(x, y, mask);
        }
        return tile;
    }
}
//# sourceMappingURL=grid.js.map