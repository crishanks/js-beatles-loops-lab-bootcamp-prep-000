function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments){
  let result = [];
  for (let i = 0; i < arrayOfMusicians.length; i++){
    const currentMusician = arrayOfMusicians[i];
    const currentInstrument = arrayOfInstruments[i];
    result.push(`${currentMusician} plays ${currentInstrument}`);
  }
  return result;
}

function johnLennonFacts (arrayOfFacts){
  let result = [];
  let i = 0;
  while (i < arrayOfFacts.length){
    result.push(arrayOfFacts[i] += '!!!');
    i++;
  }
  return result;
}

// function iLoveTheBeatles(n){
//   let result = [];
//   let n = 0;
//   do {
//     result.push('I love the Beatles!');
//   } while (n <= 8);
//   n++;
//   return result;
}


