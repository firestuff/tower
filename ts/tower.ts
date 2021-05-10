import { Grid } from './grid.js';
import * as tiles from './tiles.js';

export function main() {
  document.body.style.margin = '0';
  document.body.style.backgroundColor = 'black';
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';

  const mask = document.createElement('div');
  document.body.appendChild(mask);
  mask.style.width = 'min(100vw, 125vh)';
  mask.style.height = 'calc(0.8 * min(100vw, 125vh))';
  mask.style.overflow = 'hidden';

  const real = document.createElement('div');
  mask.appendChild(real);
  real.style.width = 'min(140vw, 175vh)';
  real.style.height = 'calc(0.8 * min(140vw, 175vh))';
  real.style.position = 'relative';
  real.style.top = 'calc((-8 / 70) * min(140vw, 175vh))';
  real.style.left = 'calc((-10 / 70) * min(140vw, 175vh))';

  const grid = new Grid(real);
  grid.set_size(70, 56);
  grid.set_tileset('tropical');
  grid.set_layers(['road', 'water', 'bridge', 'tower']);

  grid.add_tile('road', tiles.ROAD_TB, 20, 46);
  grid.add_tile('road', tiles.ROAD_BL, 18, 40);
  grid.add_tile('road', tiles.ROAD_TR, 12, 38);
  grid.add_tile('road', tiles.ROAD_BR, 12, 32);
  grid.add_tile('road', tiles.ROAD_TL, 18, 30);
  grid.add_tile('road', tiles.ROAD_BL, 18, 24);
  grid.add_tile('road', tiles.ROAD_TR, 12, 22);
  grid.add_tile('road', tiles.ROAD_BR, 12, 16);
  grid.add_tile('road', tiles.ROAD_LR, 18, 16);
  grid.add_tile('road', tiles.ROAD_TBLR, 24, 14);
  grid.add_tile('road', tiles.ROAD_TB, 26, 2);
  grid.add_tile('road', tiles.ROAD_TB, 26, 8);
  grid.add_tile('road', tiles.ROAD_TB, 26, 22);
  grid.add_tile('road', tiles.ROAD_TB, 26, 28);
  grid.add_tile('road', tiles.ROAD_TB, 26, 34);
  grid.add_tile('road', tiles.ROAD_TB, 26, 40);
  grid.add_tile('road', tiles.ROAD_TB, 26, 46);
  grid.add_tile('road', tiles.ROAD_BL, 32, 16);
  grid.add_tile('road', tiles.ROAD_TB, 34, 22);
  grid.add_tile('road', tiles.ROAD_TB, 34, 28);
  grid.add_tile('road', tiles.ROAD_TB, 34, 34);
  grid.add_tile('road', tiles.ROAD_TR, 34, 40);
  grid.add_tile('road', tiles.ROAD_LR, 40, 42);
  grid.add_tile('road', tiles.ROAD_LR, 46, 42);
  grid.add_tile('road', tiles.ROAD_TL, 52, 40);
  grid.add_tile('road', tiles.ROAD_BL, 52, 34);
  grid.add_tile('road', tiles.ROAD_LR, 46, 34);
  grid.add_tile('road', tiles.ROAD_TR, 40, 32);
  grid.add_tile('road', tiles.ROAD_BR, 40, 26);
  grid.add_tile('road', tiles.ROAD_LR, 46, 26);
  grid.add_tile('road', tiles.ROAD_TL, 52, 24);
  grid.add_tile('road', tiles.ROAD_BL, 52, 18);
  grid.add_tile('road', tiles.ROAD_LR, 46, 18);
  grid.add_tile('road', tiles.ROAD_TR, 40, 16);
  grid.add_tile('road', tiles.ROAD_BR, 40, 10);
  grid.add_tile('road', tiles.ROAD_LR, 46, 10);
  grid.add_tile('road', tiles.ROAD_LR, 52, 10);
  grid.add_tile('road', tiles.ROAD_LR, 58, 10);
  grid.add_tile('road', tiles.EMPTY, 30, 20);

  grid.add_tile('water', tiles.RIVER_TB, 47, 46);
  grid.add_tile('water', tiles.RIVER_TB, 47, 40);
  grid.add_tile('water', tiles.RIVER_TB, 47, 34);
  grid.add_tile('water', tiles.RIVER_TB, 47, 28);
  grid.add_tile('water', tiles.RIVER_TB, 47, 22);
  grid.add_tile('water', tiles.RIVER_TB, 47, 16);
  grid.add_tile('water', tiles.RIVER_TB, 47, 10);
  grid.add_tile('water', tiles.RIVER_TB, 47, 4);

  grid.add_tile('bridge', tiles.BRIDGE_LR, 46, 42);
  grid.add_tile('bridge', tiles.BRIDGE_LR, 46, 34);
  grid.add_tile('bridge', tiles.BRIDGE_LR, 46, 26);
  grid.add_tile('bridge', tiles.BRIDGE_LR, 46, 18);
  grid.add_tile('bridge', tiles.BRIDGE_LR, 46, 10);

  grid.add_tile('tower', tiles.FIREBALL1, 30, 18);
  grid.add_tile('tower', tiles.FIREBALL, 31, 17);
};

main();
