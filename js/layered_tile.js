import { Tile } from './tile.js';
export class LayeredTile extends Tile {
    constructor(width, height, tiles) {
        super(width, height);
        this.elem.style.position = 'relative';
        for (let i = 0; i < tiles.length; i++) {
            const tile = tiles[i];
            const sub = tile.get_elem();
            this.elem.appendChild(sub);
            sub.style.width = '100%';
            sub.style.height = '100%';
            sub.style.position = 'absolute';
            sub.style.top = '0';
            sub.style.left = '0';
            sub.style.zIndex = `${i}`;
        }
    }
}
//# sourceMappingURL=layered_tile.js.map