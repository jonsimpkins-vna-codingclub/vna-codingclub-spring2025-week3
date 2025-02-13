// Grading / prep methods for Step 0

let step0Expected = {
    'numWords': 0,
    '3rdWord': '',
};

let _step0_loggedNumWords = false;
let _step0_logged3rdWord = false;

function executeStep0() {
    let inputString = '';
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            inputString = 'This is an example sentence';
            step0Expected = {
                'numWords': 5,
                '3rdWord': 'an',
            };
            break;
        case 1:
            inputString = 'Pizza and cookies and ice cream';
            step0Expected = {
                'numWords': 6,
                '3rdWord': 'cookies',
            };
            break;
        default:
            inputString = 'Coding and challenges'
            step0Expected = {
                'numWords': 3,
                '3rdWord': 'challenges',
            };
    }

    _privatelyLog("Value of myString:");
    _privatelyLog('"' + inputString + '"');
    _privatelyLog('-----------');
    _privatelyLog("");

    step0(inputString);

    setTimeout(() => {
        logEndCriteria( new Map([
            ['Logged that number of words was ' + step0Expected['numWords'], _step0_loggedNumWords],
            ['Logged that third word was "' + step0Expected['3rdWord'] + '"', _step0_logged3rdWord],
        ]));
     }, 250);
}



function assertSuccessStep0(logMsg) {
    if (logMsg.includes('' + step0Expected['numWords'])) {
        _step0_loggedNumWords = true;
    }

    if (logMsg.includes(step0Expected['3rdWord'])) {
        _step0_logged3rdWord = true;
    }
}