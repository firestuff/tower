import { AnimatableTile } from './animatable_tile.js';
import { Tile } from './tile.js';

export class SequenceTile extends AnimatableTile {
  constructor(width: number, height: number, animations: Map<string, [Keyframe[], object]>, tiles: Tile[], delay: number, repeat: boolean) {
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
      tile.elem.style.opacity = '0.0';

      animation = tile.elem.animate(
        [
          {
            'offset': 0,
            'easing': 'step-end',
            'opacity': '0.0',
          },
          {
            'offset': i * tile_chunk,
            'easing': 'step-end',
            'opacity': '1.0',
          },
          {
            'offset': (i + 1) * tile_chunk,
            'opacity': '0.0',
          },
        ],
        {
          'duration': tiles.length * delay,
          'iterations': repeat ? Infinity : 1,
        },
      );
    }

    if (!repeat) {
      animation!.finished.then(() => this.elem.remove());
    }
  }

  play(_: string): Animation | undefined {
    return undefined;
  }
}
