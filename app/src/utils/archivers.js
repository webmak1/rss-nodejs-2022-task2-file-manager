import { createReadStream, createWriteStream } from 'fs';
import * as zlib from 'zlib';
import { currentLocation } from './navigation/index.js';

const brotliCompress = zlib.createBrotliCompress();
const brotliDecompress = zlib.createBrotliDecompress();

let srcFile;
let dstFile;

export const compress = async (args) => {
  srcFile = args[1];

  if (!srcFile.includes('/')) {
    srcFile = currentLocation + srcFile;
  }

  dstFile = args[2];

  if (!dstFile) {
    dstFile = srcFile + '.br';
  }

  console.log('srcFile ' + srcFile);
  console.log('dstFile ' + dstFile);

  compressRun();
};

// cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
// compress fileToCompress.txt

// compress /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToCompress.txt /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToCompress.txt.gz

const compressRun = async () => {
  const handleStream = createReadStream(srcFile);
  handleStream
    .pipe(brotliCompress)
    .pipe(createWriteStream(dstFile))
    .on('finish', () => {
      console.log(` > Compression process done: ${srcFile}`);
      console.log(`\n`);
    });
};

// decompress /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToCompress.txt.br /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToCompress.txt

// cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
// decompress fileToCompress.txt.br

export const decompress = async (args) => {
  srcFile = args[1];
  dstFile = args[2];

  if (!srcFile.includes('/')) {
    srcFile = currentLocation + srcFile;
  }

  if (!dstFile) {
    //    dstFile = srcFile + '.gz';
    let lastIndex = srcFile.lastIndexOf('.br');
    dstFile = srcFile.substring(0, lastIndex);
  }

  decompressRun();
};

export const decompressRun = async () => {
  const handleStream = createReadStream(srcFile);
  handleStream
    .pipe(brotliDecompress)
    .pipe(createWriteStream(dstFile))
    .on('finish', () => {
      console.log(` > Decompression process done: ${dstFile}`);
      console.log(`\n`);
    });
};
