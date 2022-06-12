import * as fs from 'fs';
import { errorMessageFSOperationFailed } from '../messages.js';

async function removeFile(fileToRemove) {
  await fs.unlink(fileToRemove, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(' > File' + fileToRemove + ' removed!');
  });
}

export const remove = async (fileToRemove) => {
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
