import * as fs from 'fs';
import { isDirectoryExists } from '../files-operations/checkExists.js';
import { errorMessageFSOperationFailed } from '../messages.js';
import { currentLocation } from '../navigation/index.js';
import { remove } from './remove.js';

// cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
// mv fileToRemove.txt /home/marley/tmp/
// ls /home/marley/tmp/fileToRemove.txt
// cat /home/marley/tmp/fileToRemove.txt
// rm /home/marley/tmp/fileToRemove.txt

export const move = async (fileToMove, newLocation) => {
  if (await isDirectoryExists(newLocation)) {
    let fileToMoveName = fileToMove;

    if (!fileToMove.includes('/')) {
      fileToMove = currentLocation + fileToMove;
    }

    try {
      if (!fs.existsSync(fileToMove)) {
        throw new Error(errorMessageFSOperationFailed);
      } else {
        await moveFile(fileToMove, newLocation, fileToMoveName);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

async function moveFile(fileToMove, newLocation, fileToMoveName) {
  newLocation = newLocation + fileToMoveName;

  const readable = fs.createReadStream(fileToMove, { encoding: 'utf8' });
  const writable = fs.createWriteStream(newLocation);
  readable.pipe(writable).on('finish', async () => {
    console.log('FINISH');
    await remove(fileToMove);
    console.log(`\n`);
    console.log(` > File Moved: ${newLocation}`);
    console.log(`\n`);
  });
}
