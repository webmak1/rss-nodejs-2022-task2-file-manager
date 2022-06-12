import readline from 'readline';
import { compress, decompress } from './archivers.js';
import { create } from './files-operations/create.js';
import { list } from './files-operations/list.js';
import { read } from './files-operations/read.js';
import { remove } from './files-operations/remove.js';
import { rename } from './files-operations/rename.js';
import { getFileHash } from './hashCalculation.js';
import { sayGoodBye } from './messages.js';
import { changeLocation, goUp } from './navigation/index.js';
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
      case 'up': {
        if (inputUserArgs.length > 0 && inputUserArgs.length < 2) {
          goUp(inputUserArgs[1]);
        }
        break;
      }
      case 'cd': {
        // cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
        if (inputUserArgs.length > 0 && inputUserArgs.length < 3) {
          changeLocation(inputUserArgs[1]);
        }
        break;
      }
      case 'ls': {
        if (inputUserArgs.length > 0 && inputUserArgs.length < 2) {
          list(inputUserArgs[1]);
        }
        break;
      }
      case 'cat': {
        // cat /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToRead.txt
        if (inputUserArgs.length > 0 && inputUserArgs.length < 3) {
          read(inputUserArgs[1]);
        }
        break;
      }
      case 'add': {
        // add /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToCreate.txt
        if (inputUserArgs.length > 0 && inputUserArgs.length < 3) {
          create(inputUserArgs[1]);
        }
        break;
      }
      // RENAME
      case 'rn': {
        // rn /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/wrongFilename.txt /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/properFilename.md
        if (inputUserArgs.length > 1 && inputUserArgs.length < 4) {
          rename(inputUserArgs[1], inputUserArgs[2]);
        }
        break;
      }
      // TODO
      // COPY
      case 'cp': {
        // rn /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/wrongFilename.txt /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/properFilename.md
        if (inputUserArgs.length > 1 && inputUserArgs.length < 4) {
          copy(inputUserArgs[1], inputUserArgs[2]);
        }
        break;
      }

      // TODO
      // MOVE
      case 'mv': {
        // rn /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/wrongFilename.txt /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/properFilename.md
        if (inputUserArgs.length > 1 && inputUserArgs.length < 4) {
          move(inputUserArgs[1], inputUserArgs[2]);
        }
        break;
      }

      // TODO
      // REMOVE
      case 'rm': {
        // rm /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/fileToRemove.txt
        if (inputUserArgs.length > 1 && inputUserArgs.length < 3) {
          remove(inputUserArgs[1]);
        }
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
        if (inputUserArgs.length > 1 && inputUserArgs.length < 4) {
          compress(inputUserArgs);
        }
        break;
      }
      case 'decompress': {
        if (inputUserArgs.length > 1 && inputUserArgs.length < 4) {
          decompress(inputUserArgs);
        }
        break;
      }
      default: {
        process.stdout.write(
          `
          > Invalid input
          > Try to enter another command":\n\n`
        );
        break;
      }
    }
  }).on('close', () => {
    sayGoodBye();
  });
};
