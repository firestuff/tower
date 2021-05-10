export class Tile {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.animations = new Map();
    }
    add_animation(name, keyframes, options) {
        this.animations.set(name, [keyframes, options]);
    }
    get_elem(tileset) {
        const elem = document.createElement('div');
        elem.style.backgroundImage = `url("images/${tileset}/${this.name}.svg")`;
        elem.style.backgroundSize = 'cover';
        elem.style.gridColumnEnd = `span ${this.width}`;
        elem.style.gridRowEnd = `span ${this.height}`;
        elem.addEventListener('animate', (e) => {
            const animation = this.animations.get(e.detail.name);
            if (animation) {
                elem.animate(animation[0], animation[1]);
            }
        });
        return elem;
    }
}
/*
function string_to_mask(mask_string: string): boolean[][] {
  // mask_string: '\n+++\n+++\n'

  const rows = mask_string.trim().split('\n');
  // rows: ['+++', '+++']

  const mask = [];
  for (let x = 0; x < rows[0].length; x++) {
    mask[x] = Array(rows.length);
  }
  // mask: [ [ empty, empty ], [ empty, empty ], [ empty, empty ] ]

  for (let y = 0; y < rows.length; y++) {
    const row = rows[y];
    for (let x = 0; x < row.length; x++) {
      const cell = row[x];
      mask[x][y] = (cell.toUpperCase() == 'X');
    }
  }

  return mask;
}
*/
//# sourceMappingURL=tile.js.map