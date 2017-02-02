
function slideMe(offset) {

	TweenMax.to('#bottom div',.5,{x:offset, ease: Power4.easeOut})
}

$('.one').on('click',function(){
	slideMe('-100%')
})

$('.two').on('click',function(){
	slideMe('-200%')
})

$('.three').on('click',function(){
	slideMe('0%')
})


document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);

document.documentElement.addEventListener('touchmove', function (event) {
    event.preventDefault();      
}, false);