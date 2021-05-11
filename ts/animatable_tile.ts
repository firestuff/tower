import { Tile } from './tile.js';

export abstract class AnimatableTile extends Tile {
  animations: Map<string, [Keyframe[], object]>;

  constructor(width: number, height: number, animations: Map<string, [Keyframe[], object]>) {
    super(width, height);
    this.animations = animations;
  }

  play(name: string): Animation | undefined {
    const animation = this.animations.get(name);
    if (animation) {
      return this.elem.animate(...animation);
    } else {
      return undefined;
    }
  }
}
