$(document).ready(function(){
		$('.dropdown-trigger').dropdown();
	 $('.sidenav').sidenav();
	$('.modal').modal();
	$(".dynamic-container").on("click",function(){
		$('.sidenav').hide();
	});
  });