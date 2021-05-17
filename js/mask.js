export class Mask {
    constructor(width, height) {
        this.mask = [];
        for (let x = 0; x < width; x++) {
            this.mask.push(Array(height).fill(false));
        }
    }
    static from_string(mask_string) {
        // mask_string: '\n+++\n+++\n'
        const rows = mask_string.trim().split('\n');
        // rows: ['+++', '+++']
        const mask = new Mask(rows[0].length, rows.length);
        for (let y = 0; y < rows.length; y++) {
            const row = rows[y];
            for (let x = 0; x < row.length; x++) {
                const cell = row[x].toLowerCase();
                if (cell == '+' || cell == 'x') {
                    mask.set(x, y, true);
                }
            }
        }
        return mask;
    }
    set(x, y, val) {
        this.mask[x][y] = val;
    }
    update(x, y, src) {
        for (let xi = 0; xi < src.mask.length; xi++) {
            const col = src.mask[xi];
            for (let yi = 0; yi < col.length; yi++) {
                this.set(x + xi, y + yi, col[yi]);
            }
        }
    }
}
//# sourceMappingURL=mask.js.map