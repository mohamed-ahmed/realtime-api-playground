console.log("ace-editor.js");
var editor;

window.onload = function(){

	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/javascript");
	console.log("onload");

	editor.session.on("change", function(e){
		console.log(e);
		if(globalModel.getRoot().get('text') !== editor.getValue() && typed === true ) {
			editor.clearSelection();
			//setTimeout(function(){
			typed = true;
			globalModel.getRoot().set('text', editor.getValue() );

			//}, 200);
		}
	});
}