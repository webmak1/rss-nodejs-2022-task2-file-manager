import * as fs from 'fs';
import * as os from 'os';

let fileSystemLocation = os.homedir();
const errorMessage = 'FS operation failed';

async function listDir(src) {
  await fs.readdir(src, function (err, entries) {
    if (err) {
      return console.error(err);
    }

    for (let entry of entries) {
      console.log(src + '/' + entry);
    }
  });
}

export const list = async (args) => {
  try {
    if (!fs.existsSync(fileSystemLocation)) {
      throw new Error(errorMessage);
    } else {
      await listDir(fileSystemLocation);
    }
  } catch (error) {
    console.log(error);
  }
};
