import { SimpleTile } from './simple_tile.js';
import { TileFactory } from './tile_factory.js';

export class SimpleTileFactory extends TileFactory {
  name: string;
  animations: Map<string, [Keyframe[], object]>;

  constructor(layer_name: string, width: number, height: number, name: string) {
    super(layer_name, width, height);
    this.name = name;
    this.animations = new Map();
  }

  add_animation(name: string, keyframes: Keyframe[], options: object) {
    this.animations.set(name, [keyframes, options]);
  }

  build(tileset: string): SimpleTile {
    return new SimpleTile(
      this.width,
      this.height,
      `images/${tileset}/${this.name}.svg`,
      this.animations,
    );
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
