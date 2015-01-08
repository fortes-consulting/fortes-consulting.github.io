//Suggested Sidebar toggle
$('#suggested-button, .fly-menu p').click(function() {
	$('.fly-menu').toggleClass('hidden');

    });

$('header, main').click(function() {
	$('.fly-menu').addClass('hidden');

});


//Add Option Menu toggle
$('#add-option').click(function() {
	$('.overlay, #add-option-form').fadeIn(function() {
		$(this).removeClass('hidden');
	});

});

//Add Category Menu toggle
$('#add-cat').click(function() {
	$('.overlay, #add-cat-form').fadeIn(function() {
		$(this).removeClass('hidden');
	});

});

//Overlay toggle
$('.overlay').click(function() {
	$('.overlay, .popup').fadeOut(function() {
		$(this).addClass('hidden');
	});

});

$(document).keyup(function(e) {
	if(e.keyCode == 27) {
		$('.overlay, .popup').fadeOut(function() {
			$(this).addClass('hidden');
		});
	}
});

//Details Menu toggle
$('.option img').click(function() {
	$('.overlay, #details-menu').fadeIn(function() {
		$(this).removeClass('hidden');
	});

});