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
var _prnt;
export class TowerMap {
    constructor(prnt) {
        _prnt.set(this, void 0);
        __classPrivateFieldSet(this, _prnt, prnt);
        __classPrivateFieldGet(this, _prnt).style.display = 'grid';
    }
    draw() {
        __classPrivateFieldGet(this, _prnt).style.backgroundImage = 'url("images/land1.svg")';
        __classPrivateFieldGet(this, _prnt).style.gridTemplateColumns = 'repeat(20, 1ft)';
        __classPrivateFieldGet(this, _prnt).style.gridTemplateRows = 'repeat(20, 1ft)';
    }
}
_prnt = new WeakMap();
//# sourceMappingURL=tower_map.js.map