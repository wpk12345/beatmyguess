$(document).ready(function(){
	 $('.sidenav').sidenav();
	$('.modal').modal();
	$('.dropdown-trigger').dropdown();
	$(".dynamic-container").on("click",function(){
		$('.sidenav').hide();
	});
  });