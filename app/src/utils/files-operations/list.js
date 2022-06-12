import * as fs from 'fs';
import { currentLocation } from '../navigation/index.js';

const errorMessage = 'FS operation failed';

async function listDir(src) {
  await fs.readdir(src, function (err, files) {
    if (err) {
      return console.error(err);
    }

    console.log('\n');
    console.log(' > Printing list of Files in current location!\n');

    for (let file of files) {
      console.log(file);
    }

    console.log('\n');
    console.log(' > No more files!\n');
  });
}

export const list = async (args) => {
  try {
    if (!fs.existsSync(currentLocation)) {
      throw new Error(errorMessage);
    } else {
      await listDir(currentLocation);
    }
  } catch (error) {
    console.log(error);
  }
};
