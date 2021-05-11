import { Tile } from './tile.js';

export class LayeredTile extends Tile {
  tiles: Tile[];

  constructor(width: number, height: number, tiles: Tile[]) {
    super(width, height);
    this.tiles = [];

    this.elem.style.position = 'relative';

    for (let i = 0; i < tiles.length; i++) {
      const tile = tiles[i];
      this.tiles.push(tile);

      const child = tile.get_elem();
      this.elem.appendChild(child);
      child.style.width = '100%';
      child.style.height = '100%';
      child.style.position = 'absolute';
      child.style.top = '0';
      child.style.left = '0';
      child.style.zIndex = `${i}`;
    }
  }

  play(name: string): void {
    for (const tile of this.tiles) {
      tile.play(name);
    }
  }
}
