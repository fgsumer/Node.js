'use strict';
const chalk = require('chalk');

function usage() {
  console.log(
    chalk.yellow(`
    This app helps you manage you todo tasks

    usage
      index <command> <second Command> <third Command>
  
      commands can be:
  
    help        :show this help text (index help)
    list        :list all items from todo list (index list)                                             
    add         :add item to todo list (index add <second Command>)
    remove      :remove item from todo list (index remove <second Command>)
    update      :update  item (update <second Command> <third Command>)
    reset       :delete all todo list items (index reset)
    
  `),
  );
}

module.exports = {
  usage,
};
