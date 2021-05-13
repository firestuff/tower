import { SimpleTile } from './simple_tile.js';
import { AnimatableTileFactory } from './animatable_tile_factory.js';

export class SimpleTileFactory extends AnimatableTileFactory {
  name: string;

  constructor(layer_name: string, width: number, height: number, name: string) {
    super(layer_name, width, height);
    this.name = name;
  }

  build(tileset: string): SimpleTile {
    return new SimpleTile(
      this.width,
      this.height,
      `images/${this.name.replace('{tileset}', tileset)}.svg`,
      this.animations,
    );
  }

  copy(): SimpleTileFactory {
    const stf = new SimpleTileFactory(this.layer_name, this.width, this.height, this.name);
    for (const [name, [keyframes, options]] of this.animations) {
      stf.add_animation(name, keyframes, options);
    }
    return stf;
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
