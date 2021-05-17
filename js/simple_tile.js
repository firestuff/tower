import { AnimatableTile } from './animatable_tile.js';
export class SimpleTile extends AnimatableTile {
    constructor(width, height, masks, animations, image_url) {
        super(width, height, masks, animations);
        this.elem.style.backgroundImage = `url('${encodeURIComponent(image_url)}')`;
        this.elem.style.backgroundSize = 'cover';
    }
}
//# sourceMappingURL=simple_tile.js.map