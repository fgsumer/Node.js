/* eslint-disable no-unused-vars */
'use strict';

// TODO: Write the homework code in this file

const fs = require('fs');
const chalk = require('chalk');
const usages = require('./usages');

const file = 'items.js';

function readFile(fileName) {
  try {
    return JSON.parse(fs.readFileSync(fileName));
    // eslint-disable-next-line brace-style
  } catch (err) {
    return [];
  }
}

function writeFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data));
    // eslint-disable-next-line brace-style
  } catch (err) {
    console.log(chalk.red(err));
  }
}

function toList() {
  let itemList = readFile(file);
  if (itemList.length === 0) {
    console.log(chalk.blue('Empty list'));
  }
  console.log(itemList);
}

function toAdd(command) {
  let itemList = readFile(file);
  itemList.push(command);
  writeFile(file, itemList);
  console.log(chalk.blue(`"${command}" is added to your list`));
}

function toRemove(command) {
  let itemList = readFile(file);
  itemList.splice(command - 1, 1);
  writeFile(file, itemList);
  console.log(chalk.blue(`"${command}" is removed from your list`));
}

function toReset() {
  let itemList = readFile(file);
  itemList = [];
  writeFile(file, itemList);
  console.log(chalk.blue('Empty list'));
}

function toUpdate(secondCommand, thirdCommand) {
  let itemList = readFile(file);
  itemList.splice(secondCommand - 1, 1, thirdCommand);
  writeFile(file, itemList);
  console.log(chalk.blue('Your list is updated'));
  toList();
}

/*function showUsage() {
  fs.readFile('./usages.js', 'utf8', function(error, usage) {
    if (error) throw error;
    console.log(usage);
  });
}*/

function showError() {
  // eslint-disable-next-line max-len
  console.log(chalk.bold.red('For a valid command, please type < node index help > '));
}

module.exports = {
  readFile,
  writeFile,
  toList,
  toAdd,
  toRemove,
  toReset,
  toUpdate,
  // eslint-disable-next-line comma-dangle
  showError,
};
