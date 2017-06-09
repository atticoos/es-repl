const fork = require('child_process').fork;
const exec = require('child_process').exec;

export default function createREPL() {
  const proc = exec('./node_modules/.bin/babel-node');

  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.pipe(proc.stdin);
  proc.stdout.pipe(process.stdout);

  return proc;
}
