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
var _name, _width, _height, _mask;
export class Tile {
    constructor(name, width, height, mask) {
        _name.set(this, void 0);
        _width.set(this, void 0);
        _height.set(this, void 0);
        _mask.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
        __classPrivateFieldSet(this, _width, width);
        __classPrivateFieldSet(this, _height, height);
        __classPrivateFieldSet(this, _mask, mask);
    }
    static rectangle(name, width, height) {
        const mask = Array(width).fill(Array(height).fill(true));
        return new Tile(name, width, height, mask);
    }
    get_mask() {
        return __classPrivateFieldGet(this, _mask);
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
_name = new WeakMap(), _width = new WeakMap(), _height = new WeakMap(), _mask = new WeakMap();
//# sourceMappingURL=tile.js.map