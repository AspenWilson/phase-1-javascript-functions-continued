// code your solution here
function saturdayFun(x = "roller-skate") {
    return `This Saturday, I want to ${x}!`
}
function mondayWork (x = 'go to the office') {
    return `This Monday, I will ${x}.`
}

function wrapAdjective(x = '*') {
    return function (adj = 'special') {
      return `You are ${x}${adj}${x}!`;
    };
  }
