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
var _prnt, _tileset;
export class TowerMap {
    constructor(prnt) {
        _prnt.set(this, void 0);
        _tileset.set(this, void 0);
        __classPrivateFieldSet(this, _prnt, prnt);
        __classPrivateFieldGet(this, _prnt).style.display = 'grid';
    }
    set_size(x, y) {
        __classPrivateFieldGet(this, _prnt).style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        __classPrivateFieldGet(this, _prnt).style.gridTemplateRows = `repeat(${y}, 1fr)`;
    }
    set_tileset(set) {
        __classPrivateFieldSet(this, _tileset, set);
        __classPrivateFieldGet(this, _prnt).style.backgroundImage = this.get_url('land');
    }
    get_url(tile) {
        return `url("images/${__classPrivateFieldGet(this, _tileset)}/${tile}.svg")`;
    }
}
_prnt = new WeakMap(), _tileset = new WeakMap();
//# sourceMappingURL=tower_map.js.map