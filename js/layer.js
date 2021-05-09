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
var _size_x, _size_y, _level, _tileset, _occupied;
export class Layer {
    constructor(size_x, size_y) {
        _size_x.set(this, void 0);
        _size_y.set(this, void 0);
        _level.set(this, void 0);
        _tileset.set(this, void 0);
        _occupied.set(this, void 0);
        __classPrivateFieldSet(this, _size_x, size_x);
        __classPrivateFieldSet(this, _size_y, size_y);
        __classPrivateFieldSet(this, _occupied, []);
        for (let xi = 0; xi < __classPrivateFieldGet(this, _size_x); xi++) {
            __classPrivateFieldGet(this, _occupied).push(Array(__classPrivateFieldGet(this, _size_y)).fill(false));
        }
    }
    set_level(level) {
        __classPrivateFieldSet(this, _level, level);
    }
    set_tileset(tileset) {
        __classPrivateFieldSet(this, _tileset, tileset);
    }
    add_tile(tile, x, y) {
        if (!this.can_add(tile, x, y)) {
            return undefined;
        }
        this.mark_occupied(tile, x, y);
        const elem = tile.get_elem(__classPrivateFieldGet(this, _tileset));
        elem.style.zIndex = `${__classPrivateFieldGet(this, _level)}`;
        return elem;
    }
    can_add(tile, x, y) {
        const mask = tile.get_mask();
        for (let xi = 0; xi < mask.length; xi++) {
            if (x + xi >= __classPrivateFieldGet(this, _occupied).length) {
                // Shape goes off grid (x)
                return false;
            }
            for (let yi = 0; yi < mask[xi].length; yi++) {
                if (!mask[xi][yi]) {
                    continue;
                }
                if (y + yi >= __classPrivateFieldGet(this, _occupied)[x + xi].length) {
                    // Shape goes off grid (y)
                    return false;
                }
                if (__classPrivateFieldGet(this, _occupied)[x + xi][y + yi]) {
                    // Conflicts
                    return false;
                }
            }
        }
        return true;
    }
    mark_occupied(tile, x, y) {
        const mask = tile.get_mask();
        for (let xi = 0; xi < mask.length; xi++) {
            for (let yi = 0; yi < mask[xi].length; yi++) {
                if (!mask[xi][yi]) {
                    continue;
                }
                __classPrivateFieldGet(this, _occupied)[x + xi][y + yi] = true;
            }
        }
    }
}
_size_x = new WeakMap(), _size_y = new WeakMap(), _level = new WeakMap(), _tileset = new WeakMap(), _occupied = new WeakMap();
//# sourceMappingURL=layer.js.map