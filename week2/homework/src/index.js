'use strict';

// TODO: Write the homework code in this file
const commands = require('./commands');
const usages = require('./usages');

const useableArguments = process.argv.slice(2);
const command = useableArguments[0];
const secondCommand = useableArguments[1];
const thirdCommand = useableArguments[2];

switch (command) {
  case 'list':
    commands.toList();
    break;
  case 'add':
    commands.toAdd(secondCommand);
    break;
  case 'remove':
    commands.toRemove(secondCommand);
    break;
  case 'reset':
    commands.toReset();
    break;
  case 'update':
    commands.toUpdate(secondCommand, thirdCommand);
    break;
  case 'help':
    usages.usage();
    break;
  default:
    commands.showError();
    break;
}
