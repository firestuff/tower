import { TileFactory } from './tile_factory.js';

export abstract class AnimatableTileFactory extends TileFactory {
  animations: Map<string, [Keyframe[], object]> = new Map();

  add_animation(name: string, keyframes: Keyframe[], options: object) {
    this.animations.set(name, [keyframes, options]);
  }

  abstract copy(): AnimatableTileFactory;
}
