import * as os from 'os';
const cpuName = os.cpus()[0].model;
const coreCount = os.cpus().length;
const cpuArchitecture = process.arch;

export const cpuInfo = () => {
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
};
