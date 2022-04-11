const requiredVariables = [
  'GIT_USER',
  'GIT_TOKEN',
  'GIT_REPO',
  'GIT_BASE_URL',
  'GIT_PATH',
  'STRING_TO_PRINT',
  'COMMIT_NUMBER',
  'INITIAL_DATE'
];
const printStringPixel = require('./printStringPixel');

exports.lambdaHandler = async (event, context) => {
  try {
    if (!requiredVariables.every(key => Object.keys(process.env).includes(key))) {
      throw 'Missing environment variables. Required: ' + requiredVariables.join(', ');
    }

    await printStringPixel();

  } catch (error) {
    console.log("Error: " + error);
  }
};
