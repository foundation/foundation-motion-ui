$(document).foundation();

$('.trigger-slide-in.button').click(function(){
	$(this).closest('li').find('.block').addClass('animated slide-in');
	setTimeout(function () { 
	  $('.block').removeClass('animated slide-in');
	}, 2000);
});

$('.trigger-slide-out.button').click(function(){
	$(this).closest('li').find('.block').addClass('animated slide-out');
	setTimeout(function () { 
	  $('.block').removeClass('animated slide-out');
	}, 2000);
});

$('.trigger-flip-in.button').click(function(){
	$(this).closest('li').find('.block').addClass('animated flip-in');
	setTimeout(function () { 
	  $('.block').removeClass('animated flip-in');
	}, 2000);
});

$('.trigger-flip-out.button').click(function(){
	$(this).closest('li').find('.block').addClass('animated flip-out');
	setTimeout(function () { 
	  $('.block').removeClass('animated flip-out');
	}, 2000);
});

$('.trigger-hinge-in.button').click(function(){
	$(this).closest('li').find('.block').addClass('animated hinge-in');
	setTimeout(function () { 
	  $('.block').removeClass('animated hinge-in');
	}, 2000);
});

$('.trigger-hinge-out.button').click(function(){
	$(this).closest('li').find('.block').addClass('animated hinge-out');
	setTimeout(function () { 
	  $('.block').removeClass('animated hinge-out');
	}, 2000);
});

$('.trigger-fade-in.button').click(function(){
	$(this).closest('li').find('.block').addClass('animated fade-in');
	setTimeout(function () { 
	  $('.block').removeClass('animated fade-in');
	}, 2000);
});

$('.trigger-fade-out.button').click(function(){
	$(this).closest('li').find('.block').addClass('animated fade-out');
	setTimeout(function () { 
	  $('.block').removeClass('animated fade-out');
	}, 2000);
});

$('.trigger-scale-in.button').click(function(){
	$(this).closest('li').find('.block').addClass('animated scale-in');
	setTimeout(function () { 
	  $('.block').removeClass('animated scale-in');
	}, 2000);
});

$('.trigger-scale-out.button').click(function(){
	$(this).closest('li').find('.block').addClass('animated scale-out');
	setTimeout(function () { 
	  $('.block').removeClass('animated scale-out');
	}, 2000);
});