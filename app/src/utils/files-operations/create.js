import * as fs from 'fs';

const message = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const writeFile = async (filePath) => {
  await fs.writeFile(filePath, message, function (err) {
    if (err) {
      throw new Error(errorMessage);
    }
  });
};

export const create = async (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      throw new Error(errorMessage);
    } else {
      await writeFile(filePath);
    }
  } catch (error) {
    console.log(error);
  }
};
