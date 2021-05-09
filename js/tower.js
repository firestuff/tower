import { Grid } from './grid.js';
import * as tiles from './tiles.js';
export function main() {
    document.body.style.margin = '0';
    document.body.style.backgroundColor = 'black';
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.style.width = '100vmin';
    container.style.height = '100vmin';
    const grid = new Grid(container);
    grid.set_size(40, 40);
    grid.set_tileset('tropical');
    grid.set_layers(['water', 'road']);
    grid.add_tile('road', tiles.ROAD_LR, 0, 2);
    grid.add_tile('road', tiles.ROAD_BL, 6, 2);
    grid.add_tile('road', tiles.ROAD_TB, 8, 8);
    grid.add_tile('road', tiles.ROAD_TR, 8, 14);
    grid.add_tile('road', tiles.ROAD_TL, 14, 14);
    grid.add_tile('road', tiles.ROAD_BR, 16, 8);
    grid.add_tile('road', tiles.ROAD_LTB, 22, 6);
    grid.add_tile('road', tiles.ROAD_BLR, 22, 0);
    grid.add_tile('road', tiles.ROAD_TLR, 22, 14);
    grid.add_tile('road', tiles.ROAD_RTB, 34, 32);
    grid.add_tile('road', tiles.ROAD_TBLR, 30, 14);
    grid.add_tile('road', tiles.EMPTY, 14, 6);
}
;
main();
//# sourceMappingURL=tower.js.map