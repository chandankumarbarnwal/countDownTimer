$(document).ready(function(){
 $('#countdown').countdown({date:'30 march 2020 15:39:05'}, function () {
 	$('#countdown').text('Time is over, now we are live...');
 });
});