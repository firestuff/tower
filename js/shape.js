export class Shape {
    get_mask() {
    }
    get_elem(get_url) {
        const elem = document.createElement('div');
        elem.style.backgroundImage = `url("${get_url('road-lr')}")`;
        elem.style.backgroundSize = 'cover';
    }
}
//# sourceMappingURL=shape.js.map