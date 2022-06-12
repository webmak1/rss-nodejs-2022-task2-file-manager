import { sayHello } from './utils/messages.js';
import { getCurrentLocation } from './utils/navigation/index.js';
import { readInputText } from './utils/readInputText.js';

const app = () => {
  sayHello();
  getCurrentLocation();
  readInputText();
};

app();
