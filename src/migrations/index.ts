import * as migration_20260409_155734_initial from './20260409_155734_initial';
import * as migration_20261022_131851_add_collections from './20261022_131851_add_collections';

export const migrations = [
  {
    up: migration_20260409_155734_initial.up,
    down: migration_20260409_155734_initial.down,
    name: '20260409_155734_initial',
  },
  {
    up: migration_20261022_131851_add_collections.up,
    down: migration_20261022_131851_add_collections.down,
    name: '20261022_131851_add_collections',
  },
];
