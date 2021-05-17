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
      ...this.animatable_tile_args(),
      `images/${this.name.replace('{tileset}', tileset)}`,
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
