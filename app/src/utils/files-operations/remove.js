import * as fs from 'fs';
import { errorMessageFSOperationFailed } from '../messages.js';
import { currentLocation } from '../navigation/index.js';

// cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
// rm fileToRemove.txt

async function removeFile(fileToRemove) {
  await fs.unlink(fileToRemove, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(' > File' + fileToRemove + ' removed!');
  });
}

export const remove = async (fileToRemove) => {
  if (!fileToRemove.includes('/')) {
    fileToRemove = currentLocation + fileToRemove;
  }

  try {
    if (!fs.existsSync(fileToRemove)) {
      throw new Error(errorMessageFSOperationFailed);
    } else {
      await removeFile(fileToRemove);
    }
  } catch (error) {
    console.log(error);
  }
};
