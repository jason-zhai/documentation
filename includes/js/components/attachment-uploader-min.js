(function(b){var a=function(c,e){var d;return b.extend({getForm:function(){return b("form",c.baseElement)},getUploadingMessageElement:function(){return b(".upload-in-progress",c.baseElement)},pack:function(){},displayErrors:function(f){d.displayMessages(f);this.pack()},clearErrors:function(){d.clearMessages();this.pack()},setUploadInProgress:function(g,h){var f=this.getUploadingMessageElement();if(g){f.html(h||this.getDefaultUploadingMessage())}AJS.setVisible(f,g);AJS.setVisible(this.getForm(),!g)},onUploadSuccess:function(){},getMessageHandler:function(){if(!d){d=AJS.MessageHandler({baseElement:b(".warning",c.baseElement)})}return d},getDefaultErrorMessage:function(){return AJS.I18n.getText("attachment.uploader.error")},getDefaultUploadingMessage:function(){return AJS.I18n.getText("attachment.uploader.uploading")},getContentId:function(){return AJS.Meta.get("attachment-source-content-id")}},e&&e(c))};Confluence.AttachmentUploader=function(d,g){var c,e,f;c=a(d,g);e=c.getMessageHandler();f=c.getForm();if(AJS.Meta.getBoolean("can-attach-files")){f.ajaxForm({dataType:"json",timeout:3600000,data:{contentId:c.getContentId(),responseFormat:"html"},resetForm:true,beforeSubmit:function(){c.setUploadInProgress(true);e.clearMessages()},success:function(h){c.setUploadInProgress(false);if(e.handleResponseErrors(h,c.getDefaultErrorMessage())){return}c.onUploadSuccess(h.attachmentsAdded||[])},error:function(h){c.setUploadInProgress(false);e.displayMessages(c.getDefaultErrorMessage());AJS.logError("Response from server was: "+h.responseText)}});f.find("input:file").change(function(){f.submit()})}else{f.remove()}return c}})(AJS.$);