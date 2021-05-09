import { Tile } from './tile.js';
// Straight
export const ROAD_LR = Tile.rectangle('road-lr', 6, 4);
export const ROAD_TB = Tile.rectangle('road-tb', 4, 6);
// Elbow
export const ROAD_BL = Tile.rectangle('road-bl', 6, 6);
export const ROAD_BR = Tile.rectangle('road-br', 6, 6);
export const ROAD_TL = Tile.rectangle('road-tl', 6, 6);
export const ROAD_TR = Tile.rectangle('road-tr', 6, 6);
// T
export const ROAD_BLR = Tile.rectangle('road-blr', 8, 6);
export const ROAD_TLR = Tile.rectangle('road-tlr', 8, 6);
export const ROAD_LTB = Tile.rectangle('road-ltb', 6, 8);
export const ROAD_RTB = Tile.rectangle('road-rtb', 6, 8);
// +
export const ROAD_TBLR = Tile.rectangle('road-tblr', 8, 8);
// Tower base
export const EMPTY = Tile.rectangle('empty', 4, 2);
//# sourceMappingURL=tiles.js.map