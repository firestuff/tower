import { Layer } from './layer.js';
import { Tile } from './tile.js';
import { TileFactory } from './tile_factory.js';

export class Grid {
  #prnt: HTMLElement;
  #tileset: string;
  #layers: Map<string, Layer> = new Map<string, Layer>();

  constructor(prnt: HTMLElement) {
    this.#prnt = prnt;
    this.#prnt.style.display = 'grid';
  }

  set_size(x: number, y: number) {
    this.#prnt.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    this.#prnt.style.gridTemplateRows = `repeat(${y}, 1fr)`;
  }

  set_tileset(set: string) {
    this.#tileset = set;
    this.#prnt.style.backgroundImage = `url("images/${this.#tileset}/land.svg")`;

    // TODO: Notify layers
  }

  set_layers(layers: string[]) {
    const newNames: Set<string> = new Set<string>(layers);

    for (const name of newNames) {
      if (!this.#layers.has(name)) {
        const layer = new Layer();
        layer.set_tileset(this.#tileset);
        this.#layers.set(name, layer);
      }
    }

    for (const name of this.#layers.keys()) {
      if (!newNames.has(name)) {
        // TODO: Notify layer to tear down
        this.#layers.delete(name);
      }
    }

    for (let i = 0; i < layers.length; i++) {
      const name = layers[i];
      const level = i + 1;
      const layer = this.#layers.get(name)!;
      layer.set_level(level);
    }
  }

  add_tile(layer: string, tile_factory: TileFactory, x: number, y: number): Tile {
    const tile = this.#layers.get(layer)!.add_tile(tile_factory);
    const elem = tile.get_elem();
    // Grids are 1-indexed
    elem.style.gridColumnStart = `${x + 1}`;
    elem.style.gridRowStart = `${y + 1}`;
    this.#prnt.appendChild(elem);
    return tile;
  }
}
