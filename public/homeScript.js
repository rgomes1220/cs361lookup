
//show the modal to ask if the user wants to take a
//survey on homepage
//bind on click to get fact button
$(document).ready(function(){
    $("#showSurveyPrompt").modal('show');
    $("#getfactbutton").click(function(){
        let currFact = $("#nameHolder").html();
        window.location = "/home?action=showSurvey&currFact="+currFact;
    });
});

