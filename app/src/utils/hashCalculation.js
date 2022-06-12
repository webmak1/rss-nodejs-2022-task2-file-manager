import * as crypto from 'crypto';
import * as fs from 'fs';
import { currentLocation } from './navigation/index.js';

export const getFileHash = (args) => {
  const fileToRead = args;
  calculateHash(fileToRead);
};

const calculateHash = async (fileToRead) => {
  if (!fileToRead.includes('/')) {
    fileToRead = currentLocation + fileToRead;
  }

  const fileBuffer = fs.readFileSync(fileToRead);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);

  const hex = hashSum.digest('hex');

  console.log(' > File ' + fileToRead + ' has hash ' + hex);
  console.log(' \n ');
};
