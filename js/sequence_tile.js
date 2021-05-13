import { AnimatableTile } from './animatable_tile.js';
export class SequenceTile extends AnimatableTile {
    constructor(width, height, animations, tiles, delay, repeat) {
        super(width, height, animations);
        this.elem.style.position = 'relative';
        const tile_chunk = 1 / tiles.length;
        let animation = null;
        for (let i = 0; i < tiles.length; i++) {
            const tile = tiles[i];
            this.elem.appendChild(tile.elem);
            tile.elem.style.width = '100%';
            tile.elem.style.height = '100%';
            tile.elem.style.position = 'absolute';
            tile.elem.style.top = '0';
            tile.elem.style.left = '0';
            tile.elem.style.visibility = 'hidden';
            animation = tile.elem.animate([
                {
                    'offset': 0,
                    'easing': 'step-end',
                    'visibility': 'hidden',
                },
                {
                    'offset': i * tile_chunk,
                    'easing': 'step-end',
                    'visibility': 'visible',
                },
                {
                    'offset': (i + 1) * tile_chunk,
                    'visibility': 'hidden',
                },
            ], {
                'duration': tiles.length * delay,
                'iterations': repeat ? Infinity : 1,
            });
        }
        if (!repeat) {
            animation.finished.then(() => this.elem.remove());
        }
    }
    play(_) {
        return undefined;
    }
}
//# sourceMappingURL=sequence_tile.js.map