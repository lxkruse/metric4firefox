document.onmouseup = document.onkeyup = function() {
  var selection = window.getSelection().toString();
  convertNumber(selection,getUnit(selection));
};

//returns the unit being used in selection
function getUnit(text){

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
      return unitDict[unitVariants[i]];
    }
  }

  //doesnt match any units
  return "not a unit";
}

function convertNumber(text,unit){
  var conversionDict = {
    "inch": 2.54
  };

  var metricDict = {
    "inch": "cm"
  };

  if(unit!="not a unit"){
    var number = parseFloat(text);
    var result = number*conversionDict[unit];
    var output = result.toString() + metricDict[unit];

    alert(output);
  }

}
