AJS.toInit(function(){
    $ = AJS.$
    //Hides or reveals the multicast address field when the user toggles
    //the 'generate automatically' checkbox
    $("#cluster-auto-address").change(function() {
        if($(this).is(":checked")) {
            $("#cluster-address-field").slideUp();
        }else {
            $("#cluster-address-field").slideDown();
        }
    });
});