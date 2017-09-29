pic1 = new Image(16, 16);
pic1.src = "style/loader.gif";

$('.legend').hide();


//        $("#search-form").submit(function(event) {
$(document).on("click", ".search", function (event) {


    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();

    $('.legend').show();


    //get the state value from the input box
    var stateName = $("#state").val();
    //console.log("stateName", stateName);

    //get the counties value from the input box
    var countyName = $("#county").val();
    // console.log("countyName", countyName);

    //validate stateName
    if (stateName == "") {
        alert("Please select a state")
    }
    //validate countyName
    else if (countyName == "") {
        alert("Please select a county")
    }
    //if the both stateName and countyName are valid run the api call
    else {

        //get the state code from the state name
        var selectedStateCode = "";

        //get the county code from the county name
        var selectedCountyCode = "";

        //parse the countiesCodeObject object to find the name of the selected state
        $.each(countiesCodeObject, function (selectedStateCodeKey, selectedStateCodeValue) {
            //if the first key of the object matches the state name get the state code from it
            if (Object.keys(selectedStateCodeValue)[0] == stateName) {
                selectedStateCode = selectedStateCodeValue[stateName];

                //parse the countiesCodeObject object to find the name of the selected county
                $.each(selectedStateCodeValue.counties, function (selectedCountyCodeKey, selectedCountyCodeValue) {
                    //if the first key of the object matches the county name get the county code from it
                    if (Object.keys(selectedCountyCodeValue) == countyName)
                        selectedCountyCode = selectedCountyCodeValue[countyName];
                });

            }
        });
        console.log("selectedStateCode", selectedStateCode);

        console.log("selectedCountyCode", selectedCountyCode);

        /* Update all the parameters for your API test*/
        var params = {
            get: 'MOVEDIN,MOVEDOUT,MOVEDNET,FULL1_NAME,FULL2_NAME',
            for: 'county:' + selectedCountyCode,
            in: 'state:' + selectedStateCode
        };
        var result = $.ajax({
                /* update API end point */
                url: "https://api.census.gov/data/2015/acs/flows",
                data: params,
                dataType: "json",
                /*set the call type GET / POST*/
                type: "GET"
            })
            /* if the call is successful (status 200 OK) show results */
            .done(function (result) {
                console.log(result);
                displaySearchResults(result, countyName, stateName);
            })
            /* if the call is NOT successful show errors */
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    }

    function displaySearchResults(result, countyName, stateName) {

        //create an empty variable to store one LI for each one the results
        var buildTheHtmlOutput = "";


        $.each(result, function (resultKey, resultValue) {
            //ignore the table head (the first row of the results)
            if (resultKey > 0) {
                var displayInValue = 0;
                if (resultValue[0] !== null) {
                    displayInValue = resultValue[0];
                }
                var displayOutValue = 0;
                if (resultValue[1] !== null) {
                    displayOutValue = resultValue[1];
                } else {
                    displayOutValue = "no data";
                }


                buildTheHtmlOutput += "<li class='column'>";
                buildTheHtmlOutput += "<h4>with " + resultValue[4] + "</h4>";

                //                buildTheHtmlOutput += "<h5>legend:</h5>";
                //                buildTheHtmlOutput += "<h5>people moved in<i class='fa fa-long-arrow-right fa-2x' aria-hidden='true'></i>"



                buildTheHtmlOutput += "<p>";

                buildTheHtmlOutput += displayInValue + "&nbsp";
                buildTheHtmlOutput += "<a href='#' title='Moved in'><i class='fa fa-long-arrow-right fa-2x' aria-hidden='true'></i></a>" + "&nbsp &nbsp";
                buildTheHtmlOutput += "<a href='#' title='" + resultValue[3] + "'><i class='fa fa-map-marker fa-lg' aria-hidden='true' ></i></a>" + "&nbsp &nbsp";
                buildTheHtmlOutput += "<a href='#' title='Moved out'><i class='fa fa-long-arrow-right fa-2x' aria-hidden='true' ></i></a>" + "&nbsp";
                buildTheHtmlOutput += displayOutValue;

                buildTheHtmlOutput += "</p>";

                displayOutValue = resultValue[1];

                buildTheHtmlOutput += "<p>" + "Net: " + (displayInValue - displayOutValue) + "</p>";
                buildTheHtmlOutput += "</li>";
            }
        });

        $("#search-results h4").html("Migrations for " + countyName + ", " + stateName);

        //use the HTML output to show it in the index.html
        $("#search-results ul").html(buildTheHtmlOutput);
    }

});
