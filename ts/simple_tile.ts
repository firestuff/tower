import { AnimatableTile } from './animatable_tile.js';

export class SimpleTile extends AnimatableTile {
  constructor(width: number, height: number, image_url: string, animations: Map<string, [Keyframe[], object]>) {
    super(width, height, animations);

    this.elem.style.backgroundImage = `url('${encodeURIComponent(image_url)}')`;
    this.elem.style.backgroundSize = 'cover';
  }
}

