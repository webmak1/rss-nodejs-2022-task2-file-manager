import * as os from 'os';
import { isDirectoryExists } from '../files-operations/checkExists.js';

export let currentLocation = os.homedir();

export const getCurrentLocation = async () => {
  console.log('\n');
  console.log(` > You are currently in: ${currentLocation}`);
  console.log('\n');
};

export const changeLocation = async (newLocation) => {
  if (await isDirectoryExists(newLocation)) {
    console.log('WTF');
    currentLocation = newLocation;
  }

  getCurrentLocation();
};

export const goUp = async () => {
  let lastIndex = currentLocation.lastIndexOf('/');
  if (lastIndex != 0) {
    let newLocation = currentLocation.substring(0, lastIndex);
    currentLocation = newLocation;
  } else {
    currentLocation = '/';
  }

  getCurrentLocation();
};
