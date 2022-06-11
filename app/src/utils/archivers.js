import { createReadStream, createWriteStream } from 'fs';
import * as zlib from 'zlib';
import { createGzip } from 'zlib';

let inputParam1;
let inputParam2;

export const archivers = (args) => {
  console.log(args);

  inputParam1 = args[1];
  inputParam2 = args[2];

  switch (args[0]) {
    case 'compress': {
      compress();
      break;
    }

    case 'decompress': {
      decompress();
      break;
    }

    default: {
      process.stdout.write(
        `
        > Invalid input
        > Enter next command or type "help":\n\n`
      );
      break;
    }
  }
};

// compress /home/marley/tmp/logs/file1.txt /home/marley/tmp/logs/file1.txt.gz

const compress = async () => {
  const handleStream = createReadStream(inputParam1);
  handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(inputParam2))
    .on('finish', () => {
      console.log(`Compression process done: ${inputParam1}`);
    });
};

// decompress /home/marley/tmp/logs/file1.txt.gz /home/marley/tmp/logs/file1.txt

export const decompress = async () => {
  const handleStream = createReadStream(inputParam1);
  handleStream
    .pipe(zlib.createUnzip())
    .pipe(createWriteStream(inputParam2))
    .on('finish', () => {
      console.log(`Decompression process done: ${inputParam2}`);
    });
};
