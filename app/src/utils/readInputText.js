import readline from 'readline';
import { archivers } from './archivers.js';
import { getFileHash } from './hashCalculation.js';
import { sayGoodBye } from './messages.js';
import { osInfo } from './osInfo.js';

export const readInputText = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
  });

  rl.on('line', async (inputText) => {
    const inputUserArgs = inputText.toString().trim().split(' ');

    switch (inputUserArgs[0]) {
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
      case 'navigation': {
        help();
        break;
      }
      case 'filesOperations': {
        help();
        break;
      }
      case 'os': {
        if (inputUserArgs.length > 1 && inputUserArgs.length < 3) {
          osInfo(inputUserArgs[1]);
        }
        break;
      }
      case 'hash': {
        if (inputUserArgs.length > 1 && inputUserArgs.length < 3) {
          getFileHash(inputUserArgs[1]);
        }
        break;
      }
      case 'compress': {
        if (inputUserArgs.length === 3) {
          archivers(inputUserArgs);
        }
        break;
      }
      case 'decompress': {
        if (inputUserArgs.length === 3) {
          archivers(inputUserArgs);
        }
        break;
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
