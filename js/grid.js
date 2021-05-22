import { Layer } from './layer.js';
import { Mask } from './mask.js';
export class Grid {
    constructor(prnt, width, height, tileset, layers, masks) {
        this.layers = new Map();
        this.masks = new Map();
        this.prnt = prnt;
        this.width = width;
        this.height = height;
        this.prnt.style.display = 'grid';
        this.prnt.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;
        this.prnt.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;
        this.prnt.style.backgroundImage = `url("images/${tileset}/land.svg")`;
        for (let i = 0; i <= layers.length; i++) {
            const name = layers[i];
            this.layers.set(name, new Layer(i * this.height, tileset));
        }
        for (const name of masks) {
            this.masks.set(name, new Mask(this.width, this.height));
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
    add_debug_tile(x, y, color) {
        const div = document.createElement('div');
        this.prnt.appendChild(div);
        div.style.gridColumnStart = `${x + 1}`;
        div.style.gridRowStart = `${y + 1}`;
        div.style.gridColumnEnd = 'span 1';
        div.style.gridRowEnd = 'span 1';
        div.style.backgroundColor = color;
        div.style.opacity = '0.3';
        div.style.zIndex = '1000000';
    }
    get_path(mask_name, src, dst) {
        const mask = this.masks.get(mask_name);
        const next = [];
        for (let x = 0; x < this.width; x++) {
            next.push(Array(this.height).fill(undefined));
        }
        // BFS
        const queue = [dst];
        while (queue.length) {
            const point = queue.shift();
            // Horizontal / vertical has to come before diagonal
            for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]) {
                const check = [point[0] + dx, point[1] + dy];
                if (next[check[0]][check[1]]) {
                    // Already visited
                    continue;
                }
                if (!mask.mask[check[0]][check[1]]) {
                    // Not allowed
                    continue;
                }
                next[check[0]][check[1]] = point;
                if (check[0] == src[0] && check[1] == src[1]) {
                    const path = [];
                    let cur = src;
                    while (cur[0] != dst[0] || cur[1] != dst[1]) {
                        path.push(cur);
                        cur = next[cur[0]][cur[1]];
                    }
                    path.push(dst);
                    return path;
                }
                queue.push(check);
            }
        }
        // No valid path
        return [];
    }
}
//# sourceMappingURL=grid.js.map