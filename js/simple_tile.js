import { AnimatableTile } from './animatable_tile.js';
export class SimpleTile extends AnimatableTile {
    constructor(width, height, image_url, animations) {
        super(width, height, animations);
        this.elem.style.backgroundImage = `url('${encodeURIComponent(image_url)}')`;
        this.elem.style.backgroundSize = 'cover';
    }
}
//# sourceMappingURL=simple_tile.js.map