import * as os from 'os';
const cpuName = os.cpus()[0].model;
const coreCount = os.cpus().length;
const cpuArchitecture = process.arch;

// os --EOL
// os --cpus
// os --homedir
// os --username
// os --architecture

export const osInfo = (args) => {
  const inputArgs = args.substring(2).toLowerCase();

  switch (inputArgs) {
    case 'eol': {
      console.log('> EOL is: ' + JSON.stringify(os.EOL));
      break;
    }

    case 'cpus': {
      console.log('\n');

      console.log(`> Your Cpu is: ${cpuName}`);
      console.log(`> Your Architecture is: ${cpuArchitecture}`);
      console.log(`> Your Cpu has: ${coreCount} cores`);

      console.log('\n');
      console.log('> Cores:\n');

      for (let i = 0; i < coreCount; i++) {
        console.log(
          `> Core ${i} speed is: ` +
            Math.round((os.cpus()[i].speed / 1024) * 100) / 100 +
            ' Ghz'
        );
      }
      break;
    }

    case 'homedir': {
      console.log('> homedir is: ' + os.homedir());
      break;
    }

    case 'username': {
      console.log('> OS UserName is: ' + os.userInfo().username);
      break;
    }

    case 'architecture': {
      console.log(`> Your Architecture is: ${cpuArchitecture}`);
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
};
