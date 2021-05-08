export class TowerMap {
  #prnt;

  constructor(prnt: HTMLElement) {
    this.#prnt = prnt;
    this.#prnt.style.display = 'grid';
  }

  draw() {
    this.#prnt.style.backgroundImage = 'url("images/land1.svg")';
    this.#prnt.style.gridTemplateColumns = 'repeat(20, 1ft)';
    this.#prnt.style.gridTemplateRows = 'repeat(20, 1ft)';
  }
}
