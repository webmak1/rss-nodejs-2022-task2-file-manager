import * as fs from 'fs';
import { errorMessageFSOperationFailed } from '../messages.js';
import { currentLocation } from '../navigation/index.js';

const message = 'I am fresh and young';

// cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
// add newFile.txt

const writeFile = async (createFileWithName) => {
  const writeStream = fs.createWriteStream(createFileWithName, 'utf-8');

  writeStream.end();
  writeStream.on('error', (error) => {
    console.log(` > Error: ${error}`);
  });
  writeStream.on('finish', () => {
    console.log(' > FILE CREATED');
    console.log('\n');
  });
};

export const create = async (createFileWithName) => {
  if (!createFileWithName.includes('/')) {
    createFileWithName = currentLocation + createFileWithName;
  }

  try {
    if (fs.existsSync(createFileWithName)) {
      throw new Error(errorMessageFSOperationFailed);
    } else {
      await writeFile(createFileWithName);
    }
  } catch (error) {
    console.log(error);
  }
};
