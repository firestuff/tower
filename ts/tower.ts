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
  grid.set_layers(['road', 'water', 'bridge']);

  grid.add_tile('road', tiles.ROAD_LR, 0, 6);
  grid.add_tile('road', tiles.ROAD_LR, 6, 6);
  grid.add_tile('road', tiles.ROAD_LR, 12, 6);
  grid.add_tile('water', tiles.RIVER_TB, 6, 0);
  grid.add_tile('water', tiles.RIVER_TB, 6, 6);
  grid.add_tile('water', tiles.RIVER_TB, 6, 12);
  grid.add_tile('bridge', tiles.BRIDGE_LR, 5, 6);
};

main();
