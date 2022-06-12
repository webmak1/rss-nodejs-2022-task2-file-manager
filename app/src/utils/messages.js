export let userName;

export const sayHello = () => {
  const myArgs = process.argv.slice(2);

  for (let i = 0; i < myArgs.length; i++) {
    const args = myArgs[i].split('=');
    userName = args[1];

    console.log(`\n\n > Welcome to the File Manager, ${userName}!`);
  }
};

export const sayGoodBye = () => {
  process.stdout.write(
    `\n\n > Thank you for using File Manager, ${userName}! \n\n`
  );
  process.exit();
};

export const errorMessageFSOperationFailed = () => {
  return 'FS operation failed';
};
