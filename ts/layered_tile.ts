import { Mask } from './mask.js';
import { Tile } from './tile.js';

export class LayeredTile extends Tile {
  tiles: Tile[];

  constructor(width: number, height: number, masks: Map<string, Mask>, tiles: Tile[]) {
    super(width, height, masks);
    this.tiles = [];

    this.elem.style.position = 'relative';

    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i];
      this.tiles.push(tile);

      this.elem.appendChild(tile.elem);
      tile.elem.style.width = '100%';
      tile.elem.style.height = '100%';
      tile.elem.style.position = 'absolute';
      tile.elem.style.top = '0';
      tile.elem.style.left = '0';
      tile.elem.style.zIndex = `${i}`;
    }
  }

  play(name: string): Animation | undefined {
    let ret = undefined;
    for (const tile of this.tiles) {
      ret = tile.play(name) || ret;
    }
    return ret;
  }
}
