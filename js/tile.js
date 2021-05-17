export class Tile {
    constructor(width, height, masks) {
        this.masks = masks;
        this.elem = document.createElement('div');
        this.elem.style.gridColumnEnd = `span ${width}`;
        this.elem.style.gridRowEnd = `span ${height}`;
        // Hack to avoid floating point stitching gaps
        this.elem.style.width = 'calc(100% + 1px)';
        this.elem.style.height = 'calc(100% + 1px)';
    }
    remove() {
        this.elem.remove();
    }
}
//# sourceMappingURL=tile.js.map