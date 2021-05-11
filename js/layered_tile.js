import { Tile } from './tile.js';
export class LayeredTile extends Tile {
    constructor(width, height, tiles) {
        super(width, height);
        this.tiles = [];
        this.elem.style.position = 'relative';
        for (let i = 0; i < tiles.length; i++) {
            const tile = tiles[i];
            this.tiles.push(tile);
            this.elem.appendChild(tile.elem);
            tile.elem.style.width = '100%';
            tile.elem.style.height = '100%';
            tile.elem.style.position = 'absolute';
            tile.elem.style.top = '0';
            tile.elem.style.left = '0';
            tile.elem.style.zIndex = `${i}`;
        }
    }
    play(name) {
        let ret = undefined;
        for (const tile of this.tiles) {
            ret = tile.play(name) || ret;
        }
        return ret;
    }
}
//# sourceMappingURL=layered_tile.js.map