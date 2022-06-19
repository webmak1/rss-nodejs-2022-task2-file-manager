import * as fs from 'fs';
import { errorMessageFSOperationFailed } from '../messages.js';
import { currentLocation } from '../navigation/index.js';

export const copy = async (currentFileName, newFileName) => {
  if (!currentFileName.includes('/')) {
    currentFileName = currentLocation + currentFileName;
  }

  if (!newFileName.includes('/')) {
    newFileName = currentLocation + newFileName;
  }

  // cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
  // cp fileToCopy.txt fileToCopy.txt.bkp

  try {
    if (fs.existsSync(newFileName)) {
      throw new Error(errorMessageFSOperationFailed);
    } else {
      await copyFile(currentFileName, newFileName);
    }
  } catch (error) {
    console.log(error);
  }
};

async function copyFile(currentFileName, newFileName) {
  const readable = fs.createReadStream(currentFileName, { encoding: 'utf8' });
  const writable = fs.createWriteStream(newFileName);
  readable.pipe(writable).on('finish', () => {
    console.log(` > Copying finished: ${newFileName}`);
    console.log(`\n`);
  });
}
