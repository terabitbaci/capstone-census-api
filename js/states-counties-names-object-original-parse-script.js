$(document).ready(function () {
    var currentState = "";
    var previousState = "";

    //create the output array of state objects
    var outputString = "[";
    for (var counter = 0; counter < countiesCodeObject.length; counter++) {
        //    for (var counter = 0; counter < 2; counter++) {

        var stateName = JSON.stringify(countiesCodeObject[counter][0]);
        var stateCode = JSON.stringify(countiesCodeObject[counter][1]);
        //        console.log(stateName, stateCode);
        currentState = stateName;

        //if it is a new state add the state name and code
        if (JSON.stringify(countiesCodeObject[counter][0]) != previousState) {

            //create a state object
            outputString += "{";
            outputString += stateName + ': ' + stateCode + ', ';

            //create the counties array of objects
            outputString += '"counties": [';

            //for every state add all the counties
            for (var localCounter = 0; localCounter < countiesCodeObject.length; localCounter++) {

                var countyName = JSON.stringify(countiesCodeObject[localCounter][3]);
                var countyCode = JSON.stringify(countiesCodeObject[localCounter][2]);

                // if the current county bellongs to the same state described above add it to the list
                if (JSON.stringify(countiesCodeObject[localCounter][0]) == currentState) {
                    outputString += '{' + countyName + ': ' + countyCode + "},";
                }
            }

            //close the counties array of objects
            outputString += "]";

            //close the state object
            outputString += "},";


        }
        //update the previous state with the new value
        previousState = currentState;

    }
    //close the output array of state objects
    outputString += "]";

    //exclude last ],
    outputString = outputString.replace(/},]/g, '}]');
    //exclude last },
    outputString = outputString.replace(/},}/g, '}}');

    //show the output as a string
    console.log(outputString);
    //show the output as json object
    //    console.log(JSON.parse(outputString));
});
