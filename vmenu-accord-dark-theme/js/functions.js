$(document).ready(function(jQuery){
//Отключаем родительские ссылки в выпадающих пунктах
   $("li:has(ul.dropdown)").addClass("dropdownLi")
   $("li.dropdownLi > a").click(function(eventObject){return false})
$(function() {
	$("a").bind('click',function() {
		var _this = $(this);		
// Раскрываем текущую ссылку		
_this.toggleClass('selected', 5);
_this.next().toggleClass('dropdown', 500);
// Проходим по другим ссылкам и выключаем активное состояние
   $("a").not(_this).each(function() {
      $(this).next().addClass('dropdown', 500);
	  $(this).removeClass('selected', 5);
});
});
});
});