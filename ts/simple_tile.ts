import { AnimatableTile } from './animatable_tile.js';
import { Mask } from './mask.js';

export class SimpleTile extends AnimatableTile {
  constructor(width: number, height: number, masks: Map<string, Mask>, animations: Map<string, [Keyframe[], object]>, image_url: string) {
    super(width, height, masks, animations);

    this.elem.style.backgroundImage = `url('${encodeURIComponent(image_url)}')`;
    this.elem.style.backgroundSize = 'cover';
  }
}

