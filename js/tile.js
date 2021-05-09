var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name, _width, _height;
export class Tile {
    constructor(name, width, height) {
        _name.set(this, void 0);
        _width.set(this, void 0);
        _height.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
        __classPrivateFieldSet(this, _width, width);
        __classPrivateFieldSet(this, _height, height);
    }
    get_elem(tileset) {
        const elem = document.createElement('div');
        elem.style.backgroundImage = `url("images/${tileset}/${__classPrivateFieldGet(this, _name)}.svg")`;
        elem.style.backgroundSize = 'cover';
        elem.style.gridColumnEnd = `span ${__classPrivateFieldGet(this, _width)}`;
        elem.style.gridRowEnd = `span ${__classPrivateFieldGet(this, _height)}`;
        return elem;
    }
}
_name = new WeakMap(), _width = new WeakMap(), _height = new WeakMap();
/*
function string_to_mask(mask_string: string): boolean[][] {
  // mask_string: '\n+++\n+++\n'

  const rows = mask_string.trim().split('\n');
  // rows: ['+++', '+++']

  const mask = [];
  for (let x = 0; x < rows[0].length; x++) {
    mask[x] = Array(rows.length);
  }
  // mask: [ [ empty, empty ], [ empty, empty ], [ empty, empty ] ]

  for (let y = 0; y < rows.length; y++) {
    const row = rows[y];
    for (let x = 0; x < row.length; x++) {
      const cell = row[x];
      mask[x][y] = (cell.toUpperCase() == 'X');
    }
  }

  return mask;
}
*/
//# sourceMappingURL=tile.js.map