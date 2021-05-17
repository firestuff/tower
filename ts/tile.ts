import { Mask } from './mask.js';

export abstract class Tile {
  elem: HTMLElement;
  masks: Map<string, Mask>;

  constructor(width: number, height: number, masks: Map<string, Mask>) {
    this.masks = masks;

    this.elem = document.createElement('div');
    this.elem.style.gridColumnEnd = `span ${width}`;
    this.elem.style.gridRowEnd = `span ${height}`;
    // Hack to avoid floating point stitching gaps
    this.elem.style.width = 'calc(100% + 1px)';
    this.elem.style.height = 'calc(100% + 1px)';
  }

  abstract play(name: string): Animation | undefined;

  remove(): void {
    this.elem.remove();
  }
}
