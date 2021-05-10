export class Tile {
  name: string;
  width: number;
  height: number;

  constructor(name: string, width: number, height: number) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  get_elem(tileset: string): HTMLElement {
    const elem = document.createElement('div');
    elem.style.backgroundImage = `url("images/${tileset}/${this.name}.svg")`;
    elem.style.backgroundSize = 'cover';
    elem.style.gridColumnEnd = `span ${this.width}`;
    elem.style.gridRowEnd = `span ${this.height}`;
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
