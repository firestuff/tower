import { Tile } from './tile.js';

export class SimpleTile extends Tile {
  animations: Map<string, [Keyframe[], object]>;

  constructor(width: number, height: number, image_url: string, animations: Map<string, [Keyframe[], object]>) {
    super(width, height);

    this.elem.style.backgroundImage = `url('${encodeURIComponent(image_url)}')`;
    this.elem.style.backgroundSize = 'cover';

    this.animations = animations;
  }

  play(name: string): void {
    const animation = this.animations.get(name);
    if (animation) {
      this.elem.animate(...animation);
    }
  }
}

