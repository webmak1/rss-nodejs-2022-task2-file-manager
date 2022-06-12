import { createReadStream, createWriteStream } from 'fs';
import * as zlib from 'zlib';
import { createGzip } from 'zlib';
import { currentLocation } from './navigation/index.js';

let srcFile;
let dstFile;

export const compress = async (args) => {
  srcFile = args[1];

  if (!srcFile.includes('/')) {
    srcFile = currentLocation + srcFile;
  }

  dstFile = args[2];

  if (!dstFile) {
    dstFile = srcFile + '.gz';
  }

  console.log('srcFile ' + srcFile);
  console.log('dstFile ' + dstFile);

  compressRun();
};

// compress /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToCompress.txt /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToCompress.txt.gz

const compressRun = async () => {
  const handleStream = createReadStream(srcFile);
  handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(dstFile))
    .on('finish', () => {
      console.log(`Compression process done: ${srcFile}`);
      console.log(`\n`);
    });
};

// decompress /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToCompress.txt.gz /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToCompress.txt

// cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
// decompress fileToCompress.txt.gz

export const decompress = async (args) => {
  srcFile = args[1];
  dstFile = args[2];

  if (!srcFile.includes('/')) {
    srcFile = currentLocation + srcFile;
    console.log('absolute path');
  }

  if (!dstFile) {
    //    dstFile = srcFile + '.gz';
    let lastIndex = srcFile.lastIndexOf('.gz');
    dstFile = srcFile.substring(0, lastIndex);
  }

  console.log(' srcFile ' + srcFile);
  console.log(' dstFile ' + dstFile);

  decompressRun();
};

export const decompressRun = async () => {
  const handleStream = createReadStream(srcFile);
  handleStream
    .pipe(zlib.createUnzip())
    .pipe(createWriteStream(dstFile))
    .on('finish', () => {
      console.log(`Decompression process done: ${dstFile}`);
      console.log(`\n`);
    });
};
