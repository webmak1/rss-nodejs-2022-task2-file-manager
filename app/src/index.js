import * as os from 'os';
import { sayHello } from './utils/index.js';
import { readInputText } from './utils/readInputText.js';

let location = os.homedir();

const app = () => {
  sayHello();
  console.log(` > You are currently in: ${location}`);
  readInputText();
};

app();
