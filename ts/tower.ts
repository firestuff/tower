import { Grid } from './grid.js';
import { ProjectileTileFactory } from './projectile_tile_factory.js'
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

  const grid = new Grid(
    real,
    140, 112,
    'wasteland',
    ['road', 'water', 'bridge', 'surface', 'projectile'],
    ['walkable', 'not-flyable'],
  );

  grid.add_tile(tiles.ROAD_TB, 40, 92);
  grid.add_tile(tiles.ROAD_BL, 36, 80);
  grid.add_tile(tiles.ROAD_TR, 24, 76);
  grid.add_tile(tiles.ROAD_BR, 24, 64);
  grid.add_tile(tiles.ROAD_TL, 36, 60);
  grid.add_tile(tiles.ROAD_BL, 36, 48);
  grid.add_tile(tiles.ROAD_TR, 24, 44);
  grid.add_tile(tiles.ROAD_BR, 24, 32);
  grid.add_tile(tiles.ROAD_LR, 36, 32);
  grid.add_tile(tiles.ROAD_TBLR, 48, 28);
  grid.add_tile(tiles.ROAD_TB, 52, 4);
  grid.add_tile(tiles.ROAD_TB, 52, 16);
  grid.add_tile(tiles.ROAD_TB, 52, 44);
  grid.add_tile(tiles.ROAD_TB, 52, 56);
  grid.add_tile(tiles.ROAD_TB, 52, 68);
  grid.add_tile(tiles.ROAD_TB, 52, 80);
  grid.add_tile(tiles.ROAD_TB, 52, 92);
  grid.add_tile(tiles.ROAD_BL, 64, 32);
  grid.add_tile(tiles.ROAD_TB, 68, 44);
  grid.add_tile(tiles.ROAD_TB, 68, 56);
  grid.add_tile(tiles.ROAD_TB, 68, 68);
  grid.add_tile(tiles.ROAD_TR, 68, 80);
  grid.add_tile(tiles.ROAD_LR, 80, 84);
  grid.add_tile(tiles.ROAD_LR, 92, 84);
  grid.add_tile(tiles.ROAD_TL, 104, 80);
  grid.add_tile(tiles.ROAD_BL, 104, 68);
  grid.add_tile(tiles.ROAD_LR, 92, 68);
  grid.add_tile(tiles.ROAD_TR, 80, 64);
  grid.add_tile(tiles.ROAD_BR, 80, 52);
  grid.add_tile(tiles.ROAD_LR, 92, 52);
  grid.add_tile(tiles.ROAD_TL, 104, 48);
  grid.add_tile(tiles.ROAD_BL, 104, 36);
  grid.add_tile(tiles.ROAD_LR, 92, 36);
  grid.add_tile(tiles.ROAD_TR, 80, 32);
  grid.add_tile(tiles.ROAD_BR, 80, 20);
  grid.add_tile(tiles.ROAD_LR, 92, 20);
  grid.add_tile(tiles.ROAD_LR, 104, 20);
  grid.add_tile(tiles.ROAD_LR, 116, 20);
  grid.add_tile(tiles.EMPTY, 60, 40);

  grid.add_tile(tiles.RIVER_TB, 94, 92);
  grid.add_tile(tiles.RIVER_TB, 94, 80);
  grid.add_tile(tiles.RIVER_TB, 94, 68);
  grid.add_tile(tiles.RIVER_TB, 94, 56);
  grid.add_tile(tiles.RIVER_TB, 94, 44);
  grid.add_tile(tiles.RIVER_TB, 94, 32);
  grid.add_tile(tiles.RIVER_TB, 94, 20);
  grid.add_tile(tiles.RIVER_TB, 94, 8);

  grid.add_tile(tiles.BRIDGE_LR, 92, 84);
  grid.add_tile(tiles.BRIDGE_LR, 92, 68);
  grid.add_tile(tiles.BRIDGE_LR, 92, 52);
  grid.add_tile(tiles.BRIDGE_LR, 92, 36);
  grid.add_tile(tiles.BRIDGE_LR, 92, 20);

  function add_debug_tile(x: number, y: number, color: string) {
    const div = document.createElement('div');
    real.appendChild(div);
    div.style.gridColumnStart = `${x + 1}`;
    div.style.gridRowStart = `${y + 1}`;
    div.style.gridColumnEnd = 'span 1';
    div.style.gridRowEnd = 'span 1';
    div.style.backgroundColor = color;
    div.style.opacity = '0.3';
    div.style.zIndex = '1000000';
  }

  {
    const m = grid.masks.get('walkable')!.mask;
    for (let x = 0; x < m.length; x++) {
      for (let y = 0; y < m[x].length; y++) {
        if (m[x][y]) {
          add_debug_tile(x, y, 'orange');
          continue;
        }
      }
    }
  }

  add_debug_tile(118, 23, 'blue');
  add_debug_tile(44, 94, 'red');

  function rand(min: number, max: number): number {
      return Math.round(Math.random() * (max - min) + min);
  }

  const tower = grid.add_tile(tiles.TOWER_FIREBALL1, 60, 56);
  setInterval(() => {
    tower.play('fire');
    const target_relative_x = rand(-40, 40);
    const target_relative_y = rand(-20, 40);
    const factory = new ProjectileTileFactory(tiles.FIREBALL, target_relative_x, target_relative_y, 5, 3, 10);
    grid.add_tile(factory, 62, 54);
    setTimeout(() => {
      grid.add_tile(tiles.FIREBALL_IMPACT, 62 + target_relative_x, 54 + target_relative_y);
    }, factory.duration);
  }, 3250);

  const greenaxe = grid.add_tile(tiles.GREENAXE, 60, 32);
  greenaxe.play('walk');
  greenaxe.elem.style.transitionProperty = 'top,left';
  greenaxe.elem.style.transitionDuration = '25s';
  greenaxe.elem.style.transitionTimingFunction = 'linear';
  greenaxe.elem.style.top = '0';
  greenaxe.elem.style.left = '0';
  greenaxe.elem.style.transform = 'scaleX(-1)';
  setTimeout(() => greenaxe.elem.style.left = '-500%', 100);
};

main();
