import { Tile } from './tile.js';
export class LayeredTile extends Tile {
    constructor(tiles) {
        super('', tiles[0].width, tiles[0].height);
        this.tiles = tiles;
    }
    get_elem(tileset) {
        const elem = document.createElement('div');
        elem.style.gridColumnEnd = `span ${this.width}`;
        elem.style.gridRowEnd = `span ${this.height}`;
        elem.style.position = 'relative';
        for (let i = 0; i < this.tiles.length; i++) {
            const tile = this.tiles[i];
            const sub = tile.get_elem(tileset);
            elem.appendChild(sub);
            sub.style.width = '100%';
            sub.style.height = '100%';
            sub.style.position = 'absolute';
            sub.style.top = '0';
            sub.style.left = '0';
            sub.style.zIndex = `${i}`;
        }
        elem.addEventListener('animate', (e) => {
            for (const sub of elem.children) {
                sub.dispatchEvent(new CustomEvent('animate', { 'detail': e.detail }));
            }
        });
        // XXX removeme
        setInterval(() => {
            elem.dispatchEvent(new CustomEvent('animate', { 'detail': { 'name': 'fire' } }));
        }, 3250);
        return elem;
    }
}
//# sourceMappingURL=layered_tile.js.map