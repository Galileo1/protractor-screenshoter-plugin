var env = require('../environment');

exports.config = {
  //seleniumAddress: env.seleniumAddress,
  framework: 'jasmine2',
  specs: ['../protractor/fail-test.js'],
  multiCapabilities: [{
    browserName: 'chrome'
  }, {
    browserName: 'chrome',
      'chromeOptions': {
          'mobileEmulation': {
              'deviceName': 'Nexus 6P'
      }
    }
}],  
  plugins: [{
    path: '../../../index.js',
    screenshotPath: '.tmp/bug62',
    screenshotOnExpect: 'failure+success',
    screenshotOnSpec: 'none',
    withLogs: false,
    writeReportFreq: 'asap',
    imageToAscii: 'none',
    clearFoldersBeforeTest: true
  }]
};