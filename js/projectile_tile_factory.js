import { LayeredTileFactory } from './layered_tile_factory.js';
import { TileFactory } from './tile_factory.js';
function get_distance(x, y) {
    return Math.sqrt(x ** 2 + y ** 2);
}
export class ProjectileTileFactory extends TileFactory {
    constructor(tile_factory, target_relative_x, target_relative_y, spin, speed, loft) {
        super(tile_factory.layer_name, tile_factory.width, tile_factory.height);
        this.source_tile_factory = tile_factory;
        this.target_relative_x = target_relative_x;
        this.target_relative_y = target_relative_y;
        this.spin = spin;
        this.speed = speed;
        this.loft = loft;
        const copy = tile_factory.copy();
        const top = Math.min(0, target_relative_y) - loft;
        let h1_distance = get_distance(target_relative_x / 2, top);
        let h2_distance = get_distance(target_relative_x / 2, target_relative_y - top);
        let total_distance = h1_distance + h2_distance;
        let vertex_offset = h1_distance / total_distance;
        for (let i = 0; i < 5; i++) {
            h1_distance = get_distance(target_relative_x * vertex_offset, top);
            h2_distance = get_distance(target_relative_x * (1 - vertex_offset), target_relative_y - top);
            total_distance = h1_distance + h2_distance;
            vertex_offset = h1_distance / total_distance;
        }
        copy.add_animation('launch-x', [
            {
                'offset': 0.0,
                'easing': 'linear',
                'left': '0',
                'transform': 'rotate(0)',
            },
            {
                'offset': 1.0,
                'left': `${target_relative_x / tile_factory.width * 100}%`,
                'transform': `rotate(${Math.sign(target_relative_x) * total_distance * spin * 10}deg)`,
            },
        ], {
            'duration': total_distance / speed * 100,
            'iterations': 1,
        });
        copy.add_animation('launch-y', [
            {
                'offset': 0.0,
                'easing': 'cubic-bezier(0.33, 0.66, 0.66, 1.00)',
                'top': '0',
            },
            {
                'offset': vertex_offset,
                'easing': 'cubic-bezier(0.33, 0.00, 0.66, 0.33)',
                'top': `${top / tile_factory.height * 100}%`,
            },
            {
                'offset': 1.0,
                'top': `${target_relative_y / tile_factory.height * 100}%`,
            },
        ], {
            'duration': total_distance / speed * 100,
            'iterations': 1,
        });
        this.tile_factory = new LayeredTileFactory([copy]);
    }
    build(tileset) {
        const tile = this.tile_factory.build(tileset);
        tile.play('launch-x').finished.then(() => tile.remove());
        tile.play('launch-y');
        return tile;
    }
    copy() {
        return new ProjectileTileFactory(this.source_tile_factory, this.target_relative_x, this.target_relative_y, this.spin, this.speed, this.loft);
    }
}
//# sourceMappingURL=projectile_tile_factory.js.map