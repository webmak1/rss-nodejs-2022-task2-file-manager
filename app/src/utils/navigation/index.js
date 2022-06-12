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
    currentLocation = newLocation;
  }

  getCurrentLocation();
};

export const goUp = async () => {
  let lastIndex = currentLocation.lastIndexOf('/');

  console.log('lastIndex ' + lastIndex);

  console.log('currentLocation.length ' + currentLocation.length);

  if (lastIndex === currentLocation.length - 1) {
    currentLocation = currentLocation.slice(0, -1);
    lastIndex = currentLocation.lastIndexOf('/');
  }

  if (lastIndex != 0) {
    let newLocation = currentLocation.substring(0, lastIndex);
    currentLocation = newLocation;
  } else {
    currentLocation = '/';
  }

  getCurrentLocation();
};
