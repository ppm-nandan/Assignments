function countWords(inputWords){

  var countedNames = inputWords.reduce(function (allNames, name) {

    if (allNames[name] != null) {
      allNames[name]++;
      //console.log(name);
    }
    else {
      allNames[name] = 1;
    }
    return allNames;
}, {});
return countedNames;
}
module.exports = countWords;
