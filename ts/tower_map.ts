export class TowerMap {
  #prnt: HTMLElement;
  #tileset: string;

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
    this.#prnt.style.backgroundImage = this.get_url('land');
  }

  private get_url(tile: string) {
    return `url("images/${this.#tileset}/${tile}.svg")`;
  }
}
