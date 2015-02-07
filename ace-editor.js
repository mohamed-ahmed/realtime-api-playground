console.log("ace-editor.js");
var editor;

window.onload = function(){

	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/javascript");
	console.log("onload");

}