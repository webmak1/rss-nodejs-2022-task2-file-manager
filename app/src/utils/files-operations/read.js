import * as fs from 'fs';
import { errorMessageFSOperationFailed } from '../messages.js';
import { currentLocation } from '../navigation/index.js';

// cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
// cat fileToRead.txt

async function readFile(fileToRead) {
  const readStream = fs.createReadStream(fileToRead, 'utf-8');
  readStream
    .on('data', (data) => {
      process.stdout.write(data);
      process.stdout.write('\n');
    })
    .on('end', () => {
      console.log('\n');
      console.log(' > THE END');
    })

    .on('error', (error) => {
      console.log(` > Error: ${error}`);
    });
}

export const read = async (fileToRead) => {
  if (!fileToRead.includes('/')) {
    fileToRead = currentLocation + fileToRead;
  }

  try {
    if (!fs.existsSync(fileToRead)) {
      throw new Error(errorMessageFSOperationFailed);
    } else {
      await readFile(fileToRead);
    }
  } catch (error) {
    console.log(error);
  }
};
