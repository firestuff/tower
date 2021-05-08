import { TowerMap } from './tower_map.js';
export function main() {
    document.body.style.margin = '0';
    document.body.style.backgroundColor = 'black';
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.style.width = '100vmin';
    container.style.height = '100vmin';
    const map = new TowerMap(container);
    map.set_size(20, 20);
    map.set_tileset('tropical');
}
;
main();
//# sourceMappingURL=tower.js.map