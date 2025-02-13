// Grading / prep methods for Step 2

let step2testcase = null;

let step2testcases = [
    {
        line: 612,
        lineText: 'Roses have thorns, and silver fountains mud:',
        lineWords: 8,
        thirdWord: 'thorns',
    },
    {
        line: 207,
        lineText: 'Herein lives wisdom, beauty, and increase;',
        lineWords: 7,
        thirdWord: 'wisdom',
    },
    {
        line: 849,
        lineText: 'Against that time, if ever that time come,',
        lineWords: 9,
        thirdWord: 'time',
    },
]

function executeStep2() {
    fetch('https://raw.githubusercontent.com/jonsimpkins-vna-codingclub/vna-codingclub-spring2025-week3/refs/heads/main/resources/shakespeare_sonnets.txt').then((response) => {
        response.text().then((allSonnets) => {
            step2testcase = randomElement(step2testcases);

            _privatelyLog('... loaded all Sonnets!');
            _privatelyLog('Line ' + step2testcase.line + ' is:');
            _privatelyLog(step2testcase.lineText);
            _privatelyLog('');

            setTimeout(() => {
                step2(allSonnets, step2testcase.line);
            }, 2);

            setTimeout(() => {
                logEndCriteria( new Map([
                    ['Logged length of original string', _step2hasLoggedLength],
                    ['Logged number of rows in original string', _step2hasLoggedNumLines],
                    ['Logged that third word in line ' + step2testcase.line + ' is "' + step2testcase.thirdWord + '"', _step2hasLoggedThirdWord],
                ]));
             }, 250);
        });
    });
}

let _step2hasLoggedLength = false;
let _step2hasLoggedNumLines = false;
let _step2hasLoggedThirdWord = false;

function assertSuccessStep2(logMsg) {
    if (logMsg.includes('115504')) {
        _step2hasLoggedLength = true;
    }
    if (logMsg.includes('3002')) {
        _step2hasLoggedNumLines = true;
    }

    if (logMsg.trim() == step2testcase.thirdWord) {
        _step2hasLoggedThirdWord = true;
    }
}