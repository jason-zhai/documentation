require([
    'jquery',
    'confluence/setup/setup-tracker'
],
function(
    $,
    setupTracker
) {

    $(function () {
        $(".finishAction").click(function () {
            var actionType = $(this).attr("id");
            setupTracker.insert(actionType);
        });
    });

});