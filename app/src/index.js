import { sayHello } from './utils/messages.js';
import { getCurrentLocation } from './utils/navigation/index.js';
import { readInputText } from './utils/readInputText.js';

// Переделать архиватор
// Посмотреть что там со стримами
// Удаление и переименование

// TODO
// COPY

// TODO
// MOVE

// Проверка на существование файла!

const app = () => {
  sayHello();
  getCurrentLocation();
  readInputText();
};

app();
