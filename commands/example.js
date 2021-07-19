const { Command } = require('../../../utils/commandParser');
const { ArgumentParser } = require('argparse');
const { basename } = require('path');

const ap = new ArgumentParser({
  prog: basename(__filename).split('.')[0],
  description: 'An example of package command'
});

module.exports = new Command(false, ap).execute((args, message, client, stdin) => {
  message.channel.send(`Package command example
Add them as many as you like
Wondering what you can do in commands? Go here: https://github.com/CyberL1/Discord-Bash/blob/master/utils/commandParser.js`);
});