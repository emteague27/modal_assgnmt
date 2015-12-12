$(document).ready(function(){

	$('body').on('mousedown', function(){
		console.log('hello');
		$('#modalContainer').show();
		$('#modalContainer').on('click', function(){
			$('#modalContainer').hide();
		});
	});






	
});