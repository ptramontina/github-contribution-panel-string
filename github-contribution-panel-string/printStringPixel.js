const moment = require('moment');
const { charMap } = require('utils');
const pushCommits = require('./pushCommits');

module.exports = async function () {
  // Initial date should be the first date of the contribution panel (top square)
  const initialDate = moment(process.env.INITIAL_DATE);
  const currentDay = moment();
  const stringToDisplay = process.env.STRING_TO_PRINT.toLowerCase();

  const currentDayDiff = currentDay.diff(initialDate, 'd');

  const point = currentDayDiff / 28;
  const integerPoint = parseInt(point);
  const pointToPrint = Math.round((point - integerPoint) * 28);

  const character = integerPoint / stringToDisplay.length;
  const integerCharacter = parseInt(character);
  const characterToPrint = Math.round((character - integerCharacter) * stringToDisplay.length);

  const shouldPrint = charMap[stringToDisplay.charAt(characterToPrint)].includes(pointToPrint);
  if (shouldPrint) {
    console.log('Should print char pixel!');
    await pushCommits();
  } else {
    console.log('Should not print char pixel!');
  }
}
