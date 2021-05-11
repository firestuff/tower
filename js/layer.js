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
var _level, _tileset;
export class Layer {
    constructor() {
        _level.set(this, void 0);
        _tileset.set(this, void 0);
    }
    set_level(level) {
        __classPrivateFieldSet(this, _level, level);
    }
    set_tileset(tileset) {
        __classPrivateFieldSet(this, _tileset, tileset);
    }
    add_tile(tile_factory) {
        const tile = tile_factory.build(__classPrivateFieldGet(this, _tileset));
        tile.elem.style.zIndex = `${__classPrivateFieldGet(this, _level)}`;
        return tile;
    }
}
_level = new WeakMap(), _tileset = new WeakMap();
//# sourceMappingURL=layer.js.map