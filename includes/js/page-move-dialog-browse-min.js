jQuery.fn.movePageBrowse=function(m,j,b,l,d,f){var e=jQuery;var c=e("#confluence-context-path").attr("content");var a=this;var g=e(".tree",a);g.addClass("loading").html(Confluence.Templates.MovePage.panelLoading());var o,k=function(){g.removeClass("rendering").addClass("expanding");e("#parent-selection-tree .dialog-button-panel").remove();h(AJS.Meta.get("space-key"),d,function(s){if(s&&d!=""){var p=o.findNodeBy("text",d);if(p){p.$.find("> a").addClass("current-parent")}}var r=AJS.Meta.get("page-title");if(s&&r){var q=o.findNodeBy("text",r);if(q){q.makeUnclickable();if(r!=f){q.setText(f)}}}h(j,l,function(w){if(w){var v=o.findNodeBy("text",l);if(v){v.$.find("> a").addClass("highlighted");var t=v.$.position().top;var u=g.height();if(t<0||t>u){g.scrollTop(g.scrollTop()+t-u/3)}}}g.removeClass("expanding")})})};var i=function(p){p.preventDefault();e("a.highlighted",g).removeClass("highlighted");e(this).addClass("highlighted");j=e("#chosenSpaceKey").val();b=e("#chosenSpaceKey option:selected").text();l=e(this).hasClass("root-node")?"":e(this).find("span").text();m.select(j,b,l)};var n=function(){e("select#chosenSpaceKey").val(j).change(function(){var q=e(this).val();var p=e(this).find("option:selected").text();e("#tree-root-node-item a").text(p).toggleClass("highlighted",j==q&&l=="").toggleClass("current-parent",AJS.Meta.get("space-key")==q&&d=="");g.addClass("rendering");o=o.reload({initUrl:c+"/pages/children.action?spaceKey="+encodeURIComponent(q)+"&node=root"})});e("#tree-root-div").html(Confluence.Templates.MovePage.browsePanelSpace({linkText:b})).find("a").click(i).toggleClass("highlighted",l=="").toggleClass("current-parent",AJS.Meta.get("space-key")==j&&d=="")};var h=function(q,p,r){if(q!=e("#chosenSpaceKey").val()){r(false);return}Confluence.Dialogs.Breadcrumbs.defaultGetBreadcrumbs({spaceKey:q,title:p},function(s){var t=s.slice(1);t[0]&&t[0].url.indexOf("collector/pages.action")!==-1&&t.shift();var u=e.map(t,function(v){return{text:v.title}});o.expandPath(u,function(){r(true)})},function(){m.error("Could not retrieve tree expansion information.");r(false)})};g.load(c+"/panels/browsepagelocation.action",{panelName:"browse",dialogMode:"view",spaceKey:j,parentPageString:l,pageId:AJS.params.pageId},function(){g.removeClass("loading").addClass("rendering");n();o=e("#parent-selection-tree").tree({url:c+"/pages/children.action",initUrl:c+"/pages/children.action?spaceKey="+encodeURIComponent(j)+"&node=root",parameters:["pageId","text"],undraggable:true,spinnerId:"move-page-dialog-spinner",nodeId:"pageId",click:i,onready:k,oninsert:function(){var p=this.$;if(p.parents("li:first").attr("unclickable")){this.makeUnclickable()}}});AJS.MoveDialog.tree=o})};