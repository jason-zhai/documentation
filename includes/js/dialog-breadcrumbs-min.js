jQuery.fn.renderBreadcrumbs=function(k){var g=jQuery,e=this,j=[],h=0,m=k.length-1,a=k[h],c=a.url.indexOf("~")>=0?"personalspacedesc":"spacedesc",l,b=e.closest(".breadcrumbs-container").width(),f=function(){return e.width()<b},d;j.push(Confluence.Templates.Dialog.breadcrumbItem({text:a.title,title:a.title,className:(h==m?"last":"")}));while(h++<m){l=k[h];j.push(Confluence.Templates.Dialog.breadcrumbItem({text:l.title,title:l.title,className:(h==m?"last":"")}))}this.html(j.join(""));d=g("li a span",this);d.each(function(i){if(i!=0&&i!=m){g(this).shortenUntil(f)}});g(d.get(0)).shortenUntil(f);g(d.get(m)).shortenUntil(f);return this};AJS.toInit(function(e){var c=e("#confluence-context-path").attr("content");function b(f){for(var g=1;g<f.length;g++){if(f[g].title==AJS.Meta.get("page-title")){return false}}return true}if(!AJS.MoveDialog){AJS.MoveDialog={}}var d={};AJS.MoveDialog.getBreadcrumbs=function(g,i,f){var h=g.userName?g.userName:(g.pageId?(g.pageId+":"+g.fileName):(g.spaceKey+":"+g.title+":"+g.postingDay+":"+g.fileName));if(h in d){i(d[h],"success");return}e.ajax({type:"GET",dataType:"json",data:g,url:c+"/pages/breadcrumb.action",error:f||function(){},success:function(k,l){if(!k||!k.breadcrumbs){f(k,l);return}var j=e.makeArray(k.breadcrumbs);while(j[0]&&k.type!="userinfo"&&/peopledirectory\.action$/.test(j[0].url)){j.shift()}if(k.type=="page"&&j[1]&&/pages\.action/.test(j[1].url)){j.splice(1,1)}j.type=k.type;d[h]=j;i(j,l)}})};AJS.MoveDialog.Breadcrumbs=function(i,g){var f=0;function h(m,l,k){i.renderBreadcrumbs(l);var j=m!=AJS.Meta.get("space-key")||b(l);if(j){k.clearErrors();e(k.moveButton).prop("disabled",false)}else{k.error(AJS.I18n.getText("move.page.dialog.invalid.location"));e("li:last-child",i).addClass("warning")}}return{update:function(k,j){i.html(Confluence.Templates.Dialog.breadcrumbLoading());var l=f+=1;var m=function(){if(l!=f){AJS.debug("Breadcrumb response for ",k," is stale, ignoring.");return true}return false};(g||AJS.MoveDialog.getBreadcrumbs)(k,function(n,o){if(m()){return}if(o!="success"||!n){i.html(Confluence.Templates.Dialog.breadcrumbError());return}h(k.spaceKey,n,j)},function(n){if(m()){return}i.html(Confluence.Templates.Dialog.breadcrumbError());if(n.status==404){j.error(AJS.I18n.getText("move.page.dialog.location.not.found"))}})}}};AJS.Breadcrumbs={};AJS.Breadcrumbs.getBreadcrumbs=function(g,i,f){if(!g.id){throw new Error("id is a required parameter in 'options'")}if(!g.type){throw new Error("type is a required parameter in 'options'")}var h=g.id+":"+g.type;if(h in d){i(d[h],"success");return}e.ajax({type:"GET",dataType:"json",data:g,url:Confluence.getContextPath()+AJS.REST.getBaseUrl()+"breadcrumb",error:f||function(){},success:function(k,l){if(!k||!k.breadcrumbs){f(k,l);return}var j=e.makeArray(k.breadcrumbs);while(j[0]&&k.type!="userinfo"&&/peopledirectory.action$/.test(j[0].url)){j.shift()}j.type=k.type;d[h]=j;i(j,l)}})};if(!Confluence.Dialogs){Confluence.Dialogs={}}Confluence.Dialogs.Breadcrumbs=AJS.Breadcrumbs;Confluence.Dialogs.Breadcrumbs.Controller=AJS.MoveDialog.Breadcrumbs;Confluence.Dialogs.Breadcrumbs.defaultGetBreadcrumbs=AJS.MoveDialog.getBreadcrumbs;var a=null;Confluence.PageLocation={get:function(){if(a){return a}return{spaceName:AJS.Meta.get("space-name"),spaceKey:AJS.Meta.get("space-key"),parentPageTitle:AJS.Meta.get("parent-page-title")}},set:function(f){a=f}}});