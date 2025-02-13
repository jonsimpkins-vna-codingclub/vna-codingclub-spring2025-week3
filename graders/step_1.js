// Grading / prep methods for Step 1

let step1testcase = null;

let step1testCases = [
    {
        spreadsheetDataString: 'foo,bar,baz\n111,222,333\n777,888,999',
        numRows: 3,
        row0col2: 'baz',
        row1col0: '111',
    },
    {
        spreadsheetDataString: 'aaa,bbb,ccc,ddd\n111,222,333,444',
        numRows: 2,
        row0col2: 'ccc',
        row1col0: '111',
    }
]

let _step1hasLoggedNumRows = false;
let _step1hasLoggedRow0Col2 = false;
let _step1hasLoggedRow1Col0 = false;

function executeStep1() {
    step1testcase = randomElement(step1testCases);
    
    _privatelyLog("Value of spreadsheetDataString is:");
    _privatelyLog("");
    _privatelyLog(step1testcase.spreadsheetDataString);

    _privatelyLog("");
    _privatelyLog("---------");
    _privatelyLog("");

     step1(step1testcase.spreadsheetDataString);

     setTimeout(() => {
        logEndCriteria( new Map([
            ['Logged that number of rows is ' + step1testcase.numRows, _step1hasLoggedNumRows],
            ['Logged that data at Row 0, Column 2 is "' + step1testcase.row0col2 + '"', _step1hasLoggedRow0Col2],
            ['Logged that data at Row 1, Column 0 is "' + step1testcase.row1col0 + '"', _step1hasLoggedRow1Col0],
        ]));
     }, 250);
}

function assertSuccessStep1(logMsg) {
    if (logMsg.includes('' + step1testcase.numRows)) {
        _step1hasLoggedNumRows = true;
    }
    if (logMsg.includes('' + step1testcase.row0col2)) {
        _step1hasLoggedRow0Col2 = true;
    }
    if (logMsg.includes('' + step1testcase.row1col0)) {
        _step1hasLoggedRow1Col0 = true;
    }
}