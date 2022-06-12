import * as fs from 'fs';

const errorMessage = 'FS operation failed';

async function readFile(src) {
  await fs.readFile(src, 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(data);
  });
}

export const read = async (fileToRead) => {
  try {
    if (!fs.existsSync(fileToRead)) {
      throw new Error(errorMessage);
    } else {
      await readFile(fileToRead);
    }
  } catch (error) {
    console.log(error);
  }
};
