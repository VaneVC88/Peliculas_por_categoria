var action = $(".action");
var comedy = $(".comedy");
var fiction = $(".fiction");
var kids = $(".kids");
var love = $(".love");
var scary = $(".scary");
var colocar =  $(".colocar");
var section = $(".cine");

$("#todas").click(function(){
    action.show();
	comedy.show();
	fiction.show();
	kids.show();
	love.show();
	scary.show();
}); 

function accion (element) {
	action.show();
	comedy.hide();
	fiction.hide();
	kids.hide();
	love.hide();
	scary.hide();
	section.addClass("index");
}
function comedia (element) {
	comedy.show();
	action.hide();
	fiction.hide();
	kids.hide();
	love.hide();
	scary-hide();
	section.addClass("index");
}
function ficcion (element){
	fiction.show();
	action.hide();
	comedy.hide();
	kids.hide();
	love.hide();
	scary.hide();
	section.addClass("index");
}
function infantil (element) {
	kids.show();
	action.hide();
	comedy.hide();
	fiction.hide();
	love.hide();
	scary.hide();
	section.addClass("index");
}
function romance (element){
	love.show();
	action.hide();
	comedy.hide();
	fiction.hide();
	kids.hide();
	scary.hide();
	section.addClass("index");
}
function terror (element){
	scary.show();
	action.hide();
	comedy.hide();
	fiction.hide();
	kids.hide();
	love.hide();
	section.addClass("index");
}