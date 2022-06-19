import * as fs from 'fs';
const errorMessage = 'FS operation failed';

export const isDirectoryExists = async (directoryPath) => {
  try {
    if (!fs.existsSync(directoryPath)) {
      console.log(
        ' > There is no directory ' + directoryPath + ' in our filesystem!'
      );
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};
