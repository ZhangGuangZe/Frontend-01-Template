
var tty = require('tty');
var ttys = require('ttys');
const readline = require('readline');

var stdin = ttys.stdin;
var stdout = ttys.stdout;

// stdout.write('hello    world!\n');
// stdout.write('\033[1A');
// stdout.write('frontboy');
/*
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function ask(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    })
}

void async function() {
    console.log(await ask('you project name?'));
}();
*/

// var stdin = process.stdin;

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

function getChar() {
    return new Promise(resolve => {
        stdin.once('data', function(key) {
            resolve(key);
        });
    })
}

function up(n = 1) {
    stdout.write('\033[' + n + 'A')
}

function down(n = 1) {
    stdout.write('\033[' + n + 'B')
}

function forward (n = 1) {
    stdout.write('\033[' + n + 'C')
}

function backward (n = 1) {
    stdout.write('\033[' + n + 'D')
}

void async function() {
    stdout.write('which framework do you want to use?\n')
    let answer = await select(['vue', 'react', 'angular']);
    stdout.write('You selected ' + answer + '!\n');
    process.exit();
}();

async function select(choices) {
    let selected = 0;
    for (let i = 0; i < choices.length; i++) {
        let choice = choices[i];
        if (i === selected) {
            stdout.write('\x1b[32m[x] ' + choice + '\n');
        } else {
            stdout.write('[ ] ' + choice + '\n');
        }
    }
    up(choices.length);
    forward();
    while(true) {
        let char = await getChar();
        if (char === '\u0003') {
            process.exit();
            break;
        }
        if (char === 'w' && selected > 0) {
            stdout.write(' ');
            backward();
            selected--;
            up();
            stdout.write('x');
            backward();
        }
        if (char === 's' && selected < choices.length - 1) {
            stdout.write(' ');
            backward();
            selected++;
            down();
            stdout.write('x');
            backward();
        }
        if (char === '\r') {
            down(choices.length - selected)
            backward();
            return choices[selected];
        }
    }
}