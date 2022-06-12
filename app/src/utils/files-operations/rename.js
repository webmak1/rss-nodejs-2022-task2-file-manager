import * as fs from 'fs';

const errorMessage = 'FS operation failed';

async function renameFile(wrongFilename, properFilename) {
  await fs.rename(wrongFilename, properFilename, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(
      ' > File' + wrongFilename + 'successful rename to ' + properFilename
    );
  });
}

export const rename = async (wrongFilename, properFilename) => {
  console.log(wrongFilename);
  console.log(properFilename);

  try {
    if (!fs.existsSync(wrongFilename)) {
      throw new Error(errorMessage);
    } else if (fs.existsSync(properFilename)) {
      throw new Error(errorMessage);
    } else {
      await renameFile(wrongFilename, properFilename);
    }
  } catch (error) {
    console.log(error);
  }
};
