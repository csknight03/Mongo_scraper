
//show WOD Notes field
$("#recordStats").on("click", function () {
    console.log("CLICKED");
    $("#statWrapper").removeClass('hide');
});
//Hide WOD Notes field
$("#save").on("click", function () {
    console.log("CLICKED AND SAVED");
    $("#statWrapper").addClass('hide');
});