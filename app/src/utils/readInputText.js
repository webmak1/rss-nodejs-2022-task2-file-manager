import readline from 'readline';
import { sayGoodBye } from './index.js';

export const readInputText = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
  });

  rl.on('line', async (inputText) => {
    console.log(inputText);
    const inputTextToArray = inputText.toString().trim().split(' ');

    switch (inputTextToArray[0]) {
      case '.exit': {
        sayGoodBye();
      }
      case 'exit': {
        sayGoodBye();
      }
      case 'help': {
        help();
        break;
      }
      // Убрала часть, чтобы не навлечь гнев
      case 'hash': {
        if (commandArray.length > 1) {
          const filePath = path.join(cwd, commandArray.slice(1).join(' '));
          const hash = await calculateHash(filePath);
          console.log(`Hash for the file: ${filePath} is: ${hash}`);
        }
        break; // добавлю, но его отсутствие не меняло поведение
      }
      default: {
        process.stdout.write(
          `
          > Invalid input
          > Enter next command or type "help":\n\n`
        );
        break;
      }
    }
  }).on('close', () => {
    sayGoodBye();
  });
};
