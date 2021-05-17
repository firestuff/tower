import { Mask } from './mask.js';
import { TileFactory } from './tile_factory.js';

export abstract class AnimatableTileFactory extends TileFactory {
  animations: Map<string, [Keyframe[], object]> = new Map();

  add_animation(name: string, keyframes: Keyframe[], options: object) {
    this.animations.set(name, [keyframes, options]);
  }

  animatable_tile_args(): [number, number, Map<string, Mask>, Map<string, [Keyframe[], object]>] {
    return [
      ...super.tile_args(),
      this.animations,
    ];
  }

  abstract copy(): AnimatableTileFactory;
}
