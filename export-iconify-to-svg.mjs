import { readFile } from 'node:fs/promises';
import { IconSet, exportToDirectory } from '@iconify/tools';
import { rimraf } from 'rimraf'

// Directories
const outDir = 'static/iconify/';

// Clear directory
await rimraf(outDir);

// Read file
const data = JSON.parse(
    await readFile(
        `node_modules/@iconify-json/devicon/icons.json`,
        'utf8'
    )
);

// Create IconSet
const iconSet = new IconSet(data);

// Export it
await exportToDirectory(iconSet, {
    target: `${outDir}/${iconSet.prefix}`,
    log: true,
});

console.log('Done');