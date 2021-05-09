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
var _prnt, _tileset, _layers, _size_x, _size_y;
import { Layer } from './layer.js';
export class Grid {
    constructor(prnt) {
        _prnt.set(this, void 0);
        _tileset.set(this, void 0);
        _layers.set(this, new Map());
        _size_x.set(this, void 0);
        _size_y.set(this, void 0);
        __classPrivateFieldSet(this, _prnt, prnt);
        __classPrivateFieldGet(this, _prnt).style.display = 'grid';
    }
    set_size(x, y) {
        __classPrivateFieldSet(this, _size_x, x);
        __classPrivateFieldSet(this, _size_y, y);
        // TODO: Notify layers if shrink
        __classPrivateFieldGet(this, _prnt).style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        __classPrivateFieldGet(this, _prnt).style.gridTemplateRows = `repeat(${y}, 1fr)`;
        // TODO: Notify layers if expand
    }
    set_tileset(set) {
        __classPrivateFieldSet(this, _tileset, set);
        __classPrivateFieldGet(this, _prnt).style.backgroundImage = this.get_url('land');
        // TODO: Notify layers
    }
    set_layers(layers) {
        const newNames = new Set(layers);
        for (const name of newNames) {
            if (!__classPrivateFieldGet(this, _layers).has(name)) {
                const layer = new Layer(__classPrivateFieldGet(this, _size_x), __classPrivateFieldGet(this, _size_y));
                layer.set_tileset(__classPrivateFieldGet(this, _tileset));
                __classPrivateFieldGet(this, _layers).set(name, layer);
            }
        }
        for (const name of __classPrivateFieldGet(this, _layers).keys()) {
            if (!newNames.has(name)) {
                // TODO: Notify layer to tear down
                __classPrivateFieldGet(this, _layers).delete(name);
            }
        }
        for (let i = 0; i < layers.length; i++) {
            const name = layers[i];
            const level = i + 1;
            const layer = __classPrivateFieldGet(this, _layers).get(name);
            layer.set_level(level);
        }
    }
    add_tile(layer, tile, x, y) {
        const elem = __classPrivateFieldGet(this, _layers).get(layer)?.add_tile(tile, x, y);
        if (!elem) {
            return false;
        }
        // Grids are 1-indexed
        elem.style.gridColumnStart = `${x + 1}`;
        elem.style.gridRowStart = `${y + 1}`;
        __classPrivateFieldGet(this, _prnt).appendChild(elem);
        return true;
    }
    get_url(tile) {
        return `url("images/${__classPrivateFieldGet(this, _tileset)}/${tile}.svg")`;
    }
}
_prnt = new WeakMap(), _tileset = new WeakMap(), _layers = new WeakMap(), _size_x = new WeakMap(), _size_y = new WeakMap();
//# sourceMappingURL=grid.js.map