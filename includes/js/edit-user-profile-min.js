AJS.toInit(function(e){var d=false;var c=new AJS.ConfluenceDialog({width:600,height:260,id:"password-dialog"});c.addHeader(AJS.I18n.getText("reenter.password.dialog.name"));c.addPanel("Password","pwd");var a=e("#password");c.getCurrentPanel().html(AJS.renderTemplate("re-enter-password-dialog"));var b=function(){e("#passwordconfirmation").attr("value",e("#password").attr("value"));d=true;e("#editmyprofileform").submit();return false};c.addButton(AJS.I18n.getText("reenter.password.button"),b);c.addCancel(AJS.I18n.getText("cancel.name"),function(){c.hide();return false});e("#confirm-password").submit(b);var f=e("#originalemail").attr("value");var g=e("#email");e("#editmyprofileform").submit(function(h){if(d){d=false;return true}if(g.attr("value")!=f){c.show();a.focus();return false}else{return true}});e("#cancel").click(function(h){d=true;return true})});