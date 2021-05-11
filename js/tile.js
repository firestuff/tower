export class Tile {
    constructor(width, height) {
        this.elem = document.createElement('div');
        this.elem.style.gridColumnEnd = `span ${width}`;
        this.elem.style.gridRowEnd = `span ${height}`;
    }
}
//# sourceMappingURL=tile.js.map