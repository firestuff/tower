import { Tile } from './tile.js';
export class SimpleTile extends Tile {
    constructor(width, height, image_url, animations) {
        super(width, height);
        this.elem.style.backgroundImage = `url('${encodeURIComponent(image_url)}')`;
        this.elem.style.backgroundSize = 'cover';
        this.animations = animations;
    }
    play(name) {
        const animation = this.animations.get(name);
        if (animation) {
            this.elem.animate(...animation);
        }
    }
}
//# sourceMappingURL=simple_tile.js.map