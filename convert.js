document.onmouseup = document.onkeyup = function() {
  var selection = window.getSelection().toString();
  checkUnitPattern(selection);
};

//returns the unit being used in selection
function checkUnitPattern(text){

  var unitVariants = ["inch","in","inches","\″","yard"];
  var unitDict = {
    "inch": "inch",
    "in": "inch",
    "inches": "inch",
    "\″": "inch"
  };

  var i;
  for(i=0;i<unitVariants.length;i++){
    var reStringGap = "[+-]?([0-9]*[.])?[0-9]+ " + unitVariants[i];
    var reString = "[+-]?([0-9]*[.])?[0-9]+" + unitVariants[i];
    var reGap = new RegExp(reStringGap);
    var re = new RegExp(reString);

    if(reGap.test(text)||re.test(text)){
      //decode unit
      alert(unitDict[unitVariants[i]]);
      return unitDict[unitVariants[i]];
    }
  }

  //doesnt match any units
  alert("not a unit");
  return "not a unit";
}
