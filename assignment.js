// feetToMile

function feetToMile(feet) {
  if (feet >= 0) {
    var inMile = feet / 5280;
    return inMile;
  }
}

// woodCalculator

function woodCalculator(chair, table, bed) {
  var chairWoodCount = chair * 1;
  var tableWoodCount = table * 3;
  var bedWoodCount = bed * 5;
  var totalWoodRequired = chairWoodCount + tableWoodCount + bedWoodCount;
  return totalWoodRequired;
}

// brickCalculator

function brickCalculator(storey) {
  if (storey <= 10 && storey >= 0) {
    var brickCount = 1000 * storey * 15;
  } else if (storey <= 20 && storey >= 0) {
    var brickCount = brickCalculator(10) + (storey - 10) * 1000 * 12;
  } else if (storey > 20) {
    var brickCount = brickCalculator(20) + (storey - 20) * 10 * 1000;
  }
  return brickCount;
}

// tinyFriend

function tinyFriend(names) {
  var letterCount = names[1].length;
  var nameIndex = 0;
  for (var i = 0; i < names.length; i++) {
    var nameLetterCount = names[i].length;
    if (nameLetterCount < letterCount) {
      letterCount = nameLetterCount;
      nameIndex = i;
    }
  }
  return names[nameIndex];
}
