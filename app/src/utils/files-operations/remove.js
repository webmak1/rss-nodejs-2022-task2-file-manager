import * as fs from 'fs';

const errorMessage = 'FS operation failed';

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
      throw new Error(errorMessage);
    } else {
      await removeFile(fileToRemove);
    }
  } catch (error) {
    console.log(error);
  }
};
