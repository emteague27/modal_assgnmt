$(document).ready(function(){

	$('body').on('mousedown', function(){
		// console.log('hello');
		$('#modalContainer').show();
		$('#contentBox').hide();
		$('#modalContainer').on('click', function(){
			$('#modalContainer').hide();
			location.reload();
		});
	});


	
});